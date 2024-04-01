import "./App.css";
import styled from "styled-components";
import Player from "./components/Player/Player";
import Board from "./components/Board/Board";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #fdecef;
  padding: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`;

const Players = [{
  name: 'Player 1', 
  symbol: 'X',
  wins: 0
}, 
{
  name: 'Player 2', 
  symbol: 'O',
  wins: 0
}]

function App() {
  return (
    <Wrapper className="App">
      <Container>
        <Player { ...Players[0]} />
        <Board />
        <Player { ...Players[1]} />
      </Container>
    </Wrapper>
  );
}

export default App;
