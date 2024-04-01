import React from "react";
import styled from "styled-components";
import { displayPlayerSymbol } from "../utils/displayPlayerSymbol";

const BoxContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${({ isWinning }) => (isWinning ? `#fbd04e` : `#f24c55`)};
  border-radius: 16px;
  margin-bottom: 10px;
  box-shadow: 0 4px 1px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Box({ currentState, onClick, isWinning }) {

  const handleClick = () => {
    onClick();
  };

  return (
    <BoxContainer isWinning={isWinning} onClick={handleClick}>
      {displayPlayerSymbol(currentState)}
    </BoxContainer>
  );
}
