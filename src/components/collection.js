import React from 'react'
import { Product } from './product'

const normalizeProduct = product => {
  const variant = product.variants[0]
  return {
    id: product.id,
    title: product.title,
    price: variant.price,
    image: {
      src: variant.image.src
    }
  }
}

export const Collection = props => {
  const products = props.collection.products.map(normalizeProduct)
  return (
    <section className="collection columns is-variable is-1">
      <div className="column is-one-quarter is-flex">
        <img src={props.collection.image} alt={props.collection.title} />
      </div>

      {products.map(product => (
        <div key={product.id} className="column">
          <Product {...product} />
        </div>
      ))}
    </section>
  )
}
