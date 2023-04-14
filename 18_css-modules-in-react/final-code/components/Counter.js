import { useState } from 'react'
import styles from './Counter.module.css'

console.log(styles);

export default function Counter({counterName, children}) {
  const [count, setCount] = useState(0)
  console.log(children);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={styles.textXl}>{count}</h1>
      <button
        className={[styles.button, styles.textXl].join(' ')}
        onClick={() => {
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
      {children}
    </div>
  )
}
