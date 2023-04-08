import { useState } from 'react'

const states = [1, 'Anurag Singh']

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Anurag')

  console.log('rendering');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName('Anurag Singh')
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
    </div>
  )
}
