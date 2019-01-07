import React from 'react'
import { Product } from './product'
import { normalizeProduct } from '../utils'

export const Collection = props => {
  const products = props.collection.products.edges.map(normalizeProduct)
  return (
    <section className="collection columns is-variable is-1">
      <div className="column is-one-quarter is-flex">
        <img src={props.collection.image.transformedSrc} alt={props.collection.title} />
      </div>

      {products.map(product => (
        <div key={product.id} className="column">
          <Product {...product} />
        </div>
      ))}
    </section>
  )
}
