import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Link from "../../infra/components/link";
import StatusBar from "./statusBar";

export default function Chart({ status, base }) {
  const [resultPoints, setResultPoints] = useState(null);
  const [personality, setpersonality] = useState("");

  useEffect(() => {
    setpersonality(approximatePersonality());
  }, []);

  function ramdomNumber(max, min) {
    return parseInt(Math.random() * (max - min) + min);
  }

  function approximatePersonality() {
    const points = {
      ruan: [],
      luan: [],
    };

    Object.keys(status).forEach((key) => {
      const valueLuan = Math.abs(base.luan[key] - status[key]);
      const valueRuan = Math.abs(base.ruan[key] - status[key]);
      const person = valueLuan > valueRuan ? "ruan" : "luan";

      points[person].push(key);
    });
    console.log(points);
    console.log(base["ruan"].result);
    console.log("length", base["ruan"].result.length);
    console.log("rand", ramdomNumber(base["ruan"].result.length, 0));

    setResultPoints(points);

    if (points["ruan"].length > points["luan"].length) {
      return base["ruan"].result[ramdomNumber(base["ruan"].result.length, 0)];
    }
    if (points["ruan"].length < points["luan"].length) {
      return base["luan"].result[ramdomNumber(base["luan"].result.length, 0)];
    }

    return "Nem mesmo você sabe a diferença! AMBÍGUO";
  }

  return (
    <Div>
      <Title>Aqui podemos ver o resultado do seu teste...</Title>

      <Responses>
        <Response>{personality}</Response>

        <ChartData>
          {Object.keys(status).map((key) => (
            <StatusBar statusName={key} percentage={status[key]} />
          ))}
        </ChartData>
      </Responses>

      {resultPoints && (
        <Relation>
          <Table>
            <Name>Ruan</Name>
            {Object.keys(resultPoints.ruan).map((key) => (
              <Paragraph>{resultPoints.ruan[key]}</Paragraph>
            ))}
          </Table>
          <Name>X</Name>
          <Table>
            <Name>Luan</Name>
            {Object.keys(resultPoints.luan).map((key) => (
              <Paragraph>{resultPoints.luan[key]}</Paragraph>
            ))}
          </Table>
        </Relation>
      )}

      <Link href="/">
        <Button>Voltar ao início</Button>
      </Link>
    </Div>
  );
}

Chart.propTypes = {
  status: PropTypes.object.isRequired,
  base: PropTypes.object.isRequired,
};

const Div = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
`;

const Responses = styled.div`
  position: relative;
  width: 100%;
  background-color: pink;
  margin-top: 30px;
  padding: 20px;
  display: inline;
`;

const Response = styled.h1`
  font-size: 48px;
  text-align: center;
`;

const ChartData = styled.div`
  position: relative;
  margin-top: 10px;
  display: inline;
`;

const Relation = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-size: 36px;
  text-align: center;
  align-self: center;
`;

const Table = styled.div`
  margin: 10px 180px;
`;

const Paragraph = styled.p`
  margin-top: -18px;
  margin-bottom: 38px;
  font-size: 22px;
  text-align: center;
`;

const Button = styled.button`
  max-width: 600px;
  height: 200;
  margin-top: 60px;
  padding: 5px 18px;
  backgroud: #3ab87a;
  border: 5px solid #ccc;
  font-size: 24px;
`;
