import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useWindowDimensions from "../../infra/hooks/windowDimensions";

export default function StatusBar({ statusName, percentage }) {
  const window = useWindowDimensions();
  const [bar, setBar] = useState({ value: 0, progress: "" });

  useEffect(() => {
    const symbol = "|";
    const value = parseInt(
      (((window.width * 30) / 100 / 100) * percentage) / 9
    );
    const progress = symbol.repeat(Math.abs(value));

    setBar({ value, progress });
  }, [window]);

  return (
    <ParagraphContainer>
      <Paragraph>
        {statusName} ({percentage})
      </Paragraph>
      :<StartProgress>[</StartProgress>
      <Progress style={{ color: bar.value < 0 ? "white" : "black" }}>
        {bar.progress}
      </Progress>
      <EndProgress>]</EndProgress>
    </ParagraphContainer>
  );
}

StatusBar.propTypes = {
  statusName: PropTypes.string.isRequired,
};

const ParagraphContainer = styled.div`
  align-items: center;
  height: 24px;
  margin-top: 8px;
  font-size: 20px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
`;

const Paragraph = styled.p`
  width: 320px;
  text-align: center;
`;

const StartProgress = styled.p`
  font-weight: bold;
  margin-left: 26px;
`;

const EndProgress = styled.p`
  font-weight: bold;
  margin-left: auto;
`;

const Progress = styled.p`
  width: 100%;
  min-width: 320px;
  font-weight: bold;
`;
