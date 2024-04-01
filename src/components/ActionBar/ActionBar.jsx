import React from "react";
import styled from "styled-components";
import XIcon from "../Icon/XIcon";
import OIcon from "../Icon/OIcon";
import Icon from "../Icon/Icon";

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const SymbolsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  background-color: #1f3540;
  color: white;
  padding: 4px 18px;
  border-radius: 10px;
  box-shadow: 0 2px 1px 2px rgba(0, 0, 0, 0.4);
`;

const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function ActionBar({ currentPlayer, onResetGame }) {
  return (
    <Actions>
      <SymbolsContainer>
        <XIcon width="16px" />
        <OIcon width="26px" />
      </SymbolsContainer>
      <Title>{currentPlayer} turn</Title>
      <ResetButton onClick={onResetGame}>
        <Icon id="reset" />
      </ResetButton>
    </Actions>
  );
}
