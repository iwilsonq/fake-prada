import React from 'react'
import { Link } from 'gatsby'

export const Product = props => {
  const { title, image, price, slug } = props
  return (
    <Link to={`/products/${slug}`}>
      <article className="product-card">
        <header>
          <figure>
            <img src={image.src} alt={image.altText} />
          </figure>
          <p className="has-text-black">{title}</p>
        </header>

        <span className="has-text-black">{`$ ${price}`}</span>
      </article>
    </Link>
  )
}
