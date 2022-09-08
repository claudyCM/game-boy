import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Chart from "../src/patterns/chart";

export default function Questions({ allQuestions, personalityBase }) {
  const [status, setStatus] = useState({});

  const [currentQuestion, setCurrentQuestion] = useState(ramdomNumber(0, 10));
  const [peculiarities, setPeculiarities] = useState({});
  const [history, setHistory] = useState([currentQuestion]);

  const [chart, setChart] = useState(false);

  const all = JSON.parse(allQuestions);
  const questions = Object.keys(all);
  const questionsLimit = 7;

  useEffect(() => {
    for (const question of questions) {
      for (const response of all[question].responses) {
        if (response.peculiarities) {
          const newPeculiarities = peculiarities;

          newPeculiarities[response.text] = {
            x: 0,
            y: 0,
            text: [false, response.peculiarities.alterName || response.text],
          };

          setPeculiarities(newPeculiarities);
        }
      }
    }
  }, []);

  function ramdomNumber(max, min) {
    return parseInt(Math.random() * (max - min) + min);
  }

  function nextQuestion() {
    if (history.length == questionsLimit) {
      return setChart(true);
    }

    const [min, max] = [0, questions.length];
    let isExist = true;

    while (isExist) {
      let next = ramdomNumber(max, min);

      if (history.includes(next)) {
        next = ramdomNumber(max, min);
      } else {
        setHistory([...history, next]);
        setCurrentQuestion(next);
        isExist = false;
      }
    }
  }

  async function makePeculiarities(question, index) {
    const options = {
      moveButton() {
        const [min, max] = [-400, 400];
        const x = ramdomNumber(max, min);
        const y = ramdomNumber(max, min);
        const newPeculiarities = { ...peculiarities };

        newPeculiarities[question].x = x;
        newPeculiarities[question].y = y;

        return newPeculiarities;
      },

      alterName() {
        const newPeculiarities = { ...peculiarities };

        newPeculiarities[question].text[0] = true;

        return newPeculiarities;
      },
    };

    const queue = Object.keys(
      all[questions[currentQuestion]].responses[index].peculiarities
    );

    for await (const option of queue) {
      const func = options[option];

      const newPeculiarities = func();
      setPeculiarities(newPeculiarities);
    }
  }

  function addNewStatus(newStatus) {
    const s = status;

    if (newStatus) {
      Object.keys(newStatus).forEach((statusName) => {
        if (Object.keys(s).includes(statusName)) {
          s[statusName] += Number(newStatus[statusName]);
        } else {
          s[statusName] = Number(newStatus[statusName]);
        }
      });
    }

    setStatus(s);
  }

  return (
    <div>
      {!chart && (
        <Div>
          <Question>{questions[currentQuestion]}</Question>
          <Paragraph>{all[questions[currentQuestion]].description}</Paragraph>

          {all[questions[currentQuestion]].responses.map((response, index) => {
            if (response.peculiarities) {
              return (
                <Button
                  onClick={() => {
                    addNewStatus(response.status);
                    nextQuestion();
                  }}
                  onMouseEnter={() => {
                    makePeculiarities(response.text, index);
                  }}
                  style={{
                    position: "relative",
                    top: peculiarities[response.text]?.y,
                    left: peculiarities[response.text]?.x,
                  }}
                >
                  {peculiarities[response.text]?.text[0]
                    ? peculiarities[response.text]?.text[1]
                    : response.text}
                </Button>
              );
            } else {
              return (
                <Button
                  onClick={() => {
                    addNewStatus(response.status);
                    nextQuestion();
                  }}
                >
                  {response.text}
                </Button>
              );
            }
          })}
        </Div>
      )}

      {chart && <Chart status={status} base={JSON.parse(personalityBase)} />}
    </div>
  );
}

export async function getStaticProps() {
  const { questions } = await import("../src/repositories/questions");
  const { PersonalityExpected } = await import("../src/repositories/questions");

  return {
    props: {
      allQuestions: JSON.stringify(questions),
      personalityBase: JSON.stringify(PersonalityExpected),
    },
  };
}

const Div = styled.div`
  position: relative;
  background-color: pink;
  margin-top: 70px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.h1`
  font-size: 48px;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-top: -18px;
  margin-bottom: 38px;
  font-size: 22px;
  text-align: center;
`;

const Button = styled.button`
  width: 720px;
  margin: 12px;
  padding: 5px 18px;
  backgroud: #3ab87a;
  border: 5px solid #ccc;
  font-size: 24px;
`;
