import { WINNING_COMBINATIONS } from "../WINNING_STATES";

export const checkForWinner = (board) => {
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
  
    return {
      winner,
      winningCombo
    }
  }