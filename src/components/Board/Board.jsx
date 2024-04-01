import { useState } from "react";
import styled from "styled-components";
import ActionBar from "../ActionBar/ActionBar";
import Box from "../Box";
import { checkForWinner } from "../../utils/checkForWinner";
import { isThisTheWinningCombo } from "../../utils/isThisTheWinningCombo";

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

 const { winner, winningCombo} = checkForWinner(board)

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

                const isWinning = isThisTheWinningCombo(current, winningCombo)

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
