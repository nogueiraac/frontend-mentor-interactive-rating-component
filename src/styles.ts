import styled from "styled-components";

export const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: hsl(213, 19%, 18%);
  padding: 24px;
  border-radius: 24px;
  gap: 32px;
`;
