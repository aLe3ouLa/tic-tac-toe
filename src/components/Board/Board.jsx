import { useState } from "react";
import styled from "styled-components";
import { WINNING_COMBINATIONS } from "../../WINNING_STATES";
import ActionBar from "../ActionBar/ActionBar";
import Box from "../Box";

const INITIAL = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];

const Rows = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const BoardContainer = styled.div`
    background-color: white;
    border: 4px dashed hotpink;
    padding: 10px;
    border-radius: 10px;
`;

export default function Board() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(INITIAL);

  const resetGame = () => {
    setCurrentPlayer("X");
    setBoard(INITIAL);
  };

  let winner;
  let winningCombo;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = board[combination[0].row][combination[0].column];
    const secondSymbol = board[combination[1].row][combination[1].column];
    const thirdSymbol = board[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
      winningCombo = combination;
    }
  }

  const hasDraw =
    !winner && board.every((row) => row.every((val) => val !== undefined));

  return (
    <div>
      {winner && <p> WINNER: {winner}</p>}
      {hasDraw && <p> DRAW</p>}
      <ActionBar currentPlayer={currentPlayer} onResetGame={resetGame} />
      <BoardContainer>
        {board.map((rowKey, value1) => {
          return (
            <Rows key={value1}>
              {rowKey.map((_, value2) => {
                const newState = board[value1][value2];
                const current = [value1, value2];

                let firstSymbol;
                let secondSymbol;
                let thirdSymbol;
                if (winningCombo !== undefined) {
                  firstSymbol = [winningCombo?.[0].row, winningCombo?.[0].column];
                  secondSymbol = [winningCombo?.[1].row, winningCombo?.[1].column];
                  thirdSymbol = [winningCombo?.[2].row, winningCombo?.[2].column];
                }

                
                const hasSymbols = firstSymbol && secondSymbol && thirdSymbol
                const isWinning = hasSymbols && (
                  (firstSymbol[0] === current[0] &&
                    firstSymbol[1] === current[1]) ||
                  (secondSymbol[0] === current[0] &&
                    secondSymbol[1] === current[1]) ||
                  (thirdSymbol[0] === current[0] &&
                    thirdSymbol[1] === current[1]));

                return (
                  <Box
                    isWinning={isWinning}
                    key={`${value1}-${value2}`}
                    currentState={newState}
                    onClick={() => {
                      if (hasDraw || winner) return;
                      if (newState !== undefined) {
                        return;
                      }

                      const newBoard = board;
                      newBoard[value1][value2] = currentPlayer;
                      setBoard(newBoard);

                      setCurrentPlayer((prev) => {
                        if (prev === "X") return "O";
                        else return "X";
                      });
                    }}
                  />
                );
              })}
            </Rows>
          );
        })}
      </BoardContainer>
    </div>
  );
}
