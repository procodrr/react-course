import Button from './Button'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

import './AppleCounter.css'

const totalAppleCount = 10

let rightAppleCount = 0
let leftAppleCount = totalAppleCount - rightAppleCount

const AppleCounter = () => {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      rightAppleCount--
      leftAppleCount++
      root.render(<AppleCounter />)
    }
  }
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      leftAppleCount--
      rightAppleCount++
      root.render(<AppleCounter />)
    }
  }

  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
      <p
        style={{
          textAlign: 'center',
          marginTop: '32px',
        }}
      >
        <button onClick={() => {}}>Re - Render</button>
      </p>
    </>
  )
}

export default AppleCounter
