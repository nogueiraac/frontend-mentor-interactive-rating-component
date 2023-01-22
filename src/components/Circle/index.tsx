import React from "react"
import { Circle, Content } from "./styles"

interface CirleComponentProps {
  children: React.ReactNode
  isNumber?: boolean;
  setSelectedRating?: React.Dispatch<React.SetStateAction<number | undefined>>
  selectedRating?: number;
}

export const CirleComponent = ({ children, isNumber, setSelectedRating, selectedRating }: CirleComponentProps)  => {
 
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (isNumber && setSelectedRating) {
      setSelectedRating(Number(children))
    }
  }

  return (
    <Circle 
      onClick={handleClick} 
      isNumber={isNumber ? true : false} 
      selectedRating={selectedRating} 
    >
      {children}
    </Circle>
  )
}