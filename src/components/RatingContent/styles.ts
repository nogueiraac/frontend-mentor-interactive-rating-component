import styled from "styled-components";

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`

export const CardText = styled.div`
  width: 100%;
  text-align: start;
`;

export const ListNumber = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li:last-child {
    margin-right: 0px;
  }
`;

export const ListNumberItem = styled.li`
  margin-right: 16px;
`;