export const isThisTheWinningCombo = (currentCombo, winningCombo) => {
    if (winningCombo === undefined) {
      return false;
    }
  
    const firstSymbol = [winningCombo?.[0].row, winningCombo?.[0].column];
    const secondSymbol = [winningCombo?.[1].row, winningCombo?.[1].column];
    const thirdSymbol = [winningCombo?.[2].row, winningCombo?.[2].column];
  
    const hasSymbols = firstSymbol && secondSymbol && thirdSymbol;
    const isWinning =
      hasSymbols &&
      ((firstSymbol[0] === currentCombo[0] &&
        firstSymbol[1] === currentCombo[1]) ||
        (secondSymbol[0] === currentCombo[0] &&
          secondSymbol[1] === currentCombo[1]) ||
        (thirdSymbol[0] === currentCombo[0] &&
          thirdSymbol[1] === currentCombo[1]));
    return isWinning;
  };