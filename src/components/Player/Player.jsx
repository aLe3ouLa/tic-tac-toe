import React, { memo } from "react";
import styled from "styled-components";
import { displayPlayerSymbol } from "../../utils/displayPlayerSymbol";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PlayerContainer = styled.div`
  border: 4px solid pink;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 4px solid pink;
`;

const SymbolContainer = styled.div`
  padding: 4px 0;
  border-radius: 30px;
  background-color: #f24c55;
`;

const Wins = styled.p`
  border: 2px solid #fbd04e;
  padding: 6px;
  color: #fbd04e;
  background-color: white;
  border-radius: 20px;
  font-weight: bold;
`;

function Player({ name, symbol, wins }) {
  return (
    <div>
      <PlayerContainer>
        <Image
          src={`https://robohash.org/${getRandomNumber(1, 20)}`}
          alt="avatar"
        />
        <p>{name}</p>
        <SymbolContainer>{displayPlayerSymbol(symbol)}</SymbolContainer>
      </PlayerContainer>

      <Wins>Win Rounds: {wins}</Wins>
    </div>
  );
}

export default memo(Player);
