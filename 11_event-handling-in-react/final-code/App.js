import LeftArrow from './assets/images/left-arrow.png'
import AppleCounter from './components/AppleCounter'

const App = () => {
  return (
    <div>
      <AppleCounter
        onClick={(e) => {
          console.log(e)
        }}
      />
    </div>
  )
}

export default App
