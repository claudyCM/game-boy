import styled from "styled-components";

import Link from "../src/infra/components/link";

export default function Home() {
  return (
    <Div>
      <Title>Sejam muito bem vindos ilustres pilares!</Title>

      <Paragraph>
        Hoje vamos descobrir os níveis de certas características de vocês
        baseado em perguntas minuciosamente selecionadas por pessoas
        duvidosamente capacitadas... Vocês estão prontos crianças?
      </Paragraph>

      <Link href="/questions">
        <Button>Estamos prontos, capitão! Ôoooooooh</Button>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
`;

const Paragraph = styled.p`
  background-color: pink;
  font-size: 22px;
  padding: 20px;
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
