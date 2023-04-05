import Button from "./Button"

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from "./AppleBasket"

import './AppleCounter.css'

const AppleCounter = () => {
  return (
    <section>
        <AppleBasket appleCount={10} basketName="Basket 1" />
        <Button imageUrl={LeftArrow}/>
        <Button imageUrl={RightArrow}/>
        <AppleBasket appleCount={0} basketName="Basket 2" />
    </section>
  )
}

export default AppleCounter