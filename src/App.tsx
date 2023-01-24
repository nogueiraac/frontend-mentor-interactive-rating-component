import { useState } from 'react'
import { RatingContent } from './components/RatingContent';
import * as Styles from "./styles"

function App() {
  const [ selectedRating, setSelectedRating ] = useState<number>();

  return (
    <Styles.App>
      <Styles.Card>
        <RatingContent selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
      </Styles.Card>
    </Styles.App>
  )
}

export default App
