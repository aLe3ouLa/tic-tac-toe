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

function App() {
  return (
    <Wrapper className="App">
      <Container>
        <Player name="Player 1" symbol="X" wins={1} />
        <Board />
        <Player name="Player 2" symbol="O" wins={2} />
      </Container>
    </Wrapper>
  );
}

export default App;
