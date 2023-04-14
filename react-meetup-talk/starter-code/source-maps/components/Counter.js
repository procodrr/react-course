import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  console.log(count);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((previousState) => previousState - 1)
        }}
      >
        -
      </button>
      &nbsp;
      <button
        onClick={() => {
          setCount((previousState) => previousState + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
