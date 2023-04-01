import { createRoot } from 'react-dom/client'
import './style.css'

function Card(key, title, image, brand, price) {
  console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.title,
            product.thumbnail,
            product.brand,
            product.price
          )
        })}
      </div>
    )
  })
