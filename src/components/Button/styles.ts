import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 24px;
  background-color: hsl(25, 97%, 53%);

  :hover {
    color: hsl(25, 97%, 53%);
    background-color: #FFFFFF;
    border-color:  #FFFFFF;
  }

  :focus {
    outline: none;
  }
`;