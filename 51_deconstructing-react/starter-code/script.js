import { createRoot } from 'react-dom/client'
import './style.css'
import React from 'react'

function Card(props) {
  const { title, image, brand, price } = props
  return (
    <div className="card">
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

const h1 = <h1>Hii</h1>

console.log(h1);

const root = createRoot(document.getElementById('root'))


fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          )
        })}
      </div>
    )
  })

// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: Card,
//   ref: null,
//   props: {
//     title: 'iPhone 13',
//     image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     brand: 'Apple',
//     price: 899,
//     key: 12
//   }
// })
