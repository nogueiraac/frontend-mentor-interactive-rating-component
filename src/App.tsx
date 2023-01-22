import { useState } from 'react'
import { Card } from "./components/Card"
import * as Styles from "./styles"

function App() {
  const [ selectedRating, setSelectedRating ] = useState<number>();

  return (
    <Styles.App>
      <Card selectedRating={selectedRating} setSelectedRating={setSelectedRating}/>
    </Styles.App>
  )
}

export default App
