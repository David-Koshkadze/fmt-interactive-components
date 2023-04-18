import Card from "./Card";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --Moderate-blue: hsl(238, 40%, 52%);
    --Soft-Red: hsl(358, 79%, 66%);
    --Light-grayish-blue: hsl(239, 57%, 85%);
    --Pale-red: hsl(357, 100%, 86%);
    --Dark-blue: hsl(212, 24%, 26%);
    --Grayish-Blue: hsl(211, 10%, 45%);
    --Light-gray: hsl(223, 19%, 93%);
    --Very-light-gray: hsl(228, 33%, 97%);
    --White: hsl(0, 0%, 100%);
  }
`;

const AppContainer = styled.div`
  background: var(--Light-gray);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Card />
        <Card />
      </AppContainer>
    </>
  );
}

export default App;
