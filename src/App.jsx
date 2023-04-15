import Card from "./Card";
import styled from "styled-components";

const AppContainer = styled.div`
  background: #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Card />
      <Card />
    </AppContainer>
  );
}

export default App;
