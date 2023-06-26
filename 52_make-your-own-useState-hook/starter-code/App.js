import React from './react'
import { render } from './react-dom'

import './App.css'

function Card({ title, image, brand, price }) {
    console.log(price);
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

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    render(
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
      </div>,
      document.getElementById('root')
    )
  })
