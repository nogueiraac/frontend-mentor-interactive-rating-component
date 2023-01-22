import React from "react";
import styled from "styled-components";

interface CircleProps {
  isNumber: boolean;
  children: React.ReactNode;
  selectedRating?: number;
}

export const Circle = styled.div<CircleProps>`
  width: 20px;
  height: 20px;
  background-color: ${({ children, selectedRating }) => Number(children) === selectedRating ? 'hsl(217, 12%, 63%)' : 'hsl(213, 19%, 18%)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: ${({isNumber}) => isNumber 
    ? 'pointer' 
    : ''};

  :hover {
    background-color: ${({isNumber}) => isNumber 
    ? 'hsl(25, 97%, 53%)' 
    : ''};
  }
`;

export const Content = styled.div`
  text-align: center;
`;