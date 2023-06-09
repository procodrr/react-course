import React from 'react'
import { useState } from 'react'

export default function NewCounter({ name }) {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <>
      <h1 className='mt-4'>{name}</h1>
      <div className="mt-6 flex items-center gap-4">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2(count2 - 1)}
        >
          -
        </button>
        <h2>{count2}</h2>
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
      </div>
    </>
  )
}
