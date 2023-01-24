import { useState } from "react";
import { Button } from "../Button"
import { CirleComponent } from "../Circle"
import { star } from "../Svg"

import { Card as StyledCard, HeaderCard, CardText, ListNumber, ListNumberItem, Title} from "./styles"

interface CardProps {
  setSelectedRating: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedRating?: number;
}

export const Card = ({ setSelectedRating, selectedRating }: CardProps) => {

  const ratingList = [ 1, 2, 3, 4, 5];
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log(selectedRating)
  }

  return(
    <StyledCard>
      <HeaderCard>
        <CirleComponent>
          <img src={star} alt="start icon" />
        </CirleComponent>
      </HeaderCard>
      <CardText>
      <Title>How did we do ?</Title>
      <p>
        Please let us know we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>
      </CardText>
      <ListNumber>
        {
          ratingList.map((item: number) => (
            <ListNumberItem key={item}>
              <CirleComponent selectedRating={selectedRating} isNumber={true} setSelectedRating={setSelectedRating}>
                {item}
              </CirleComponent>
            </ListNumberItem>
          ))
        }
      </ListNumber>
      <Button onClick={handleClick}>
        SUBMIT
      </Button>
    </StyledCard>
  )
}