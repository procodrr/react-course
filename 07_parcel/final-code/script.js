import { createRoot } from 'react-dom/client'

const h1 = <h1>Hello World</h1>

const root = createRoot(document.getElementById('root'))

root.render(h1)
console.log('Hello world!!!')
