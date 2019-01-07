import React from 'react'
import { Link } from 'gatsby'

const formatTitleForUrl = (title = '') => {
  const matchSpaces = /\s/g
  return title.toLowerCase().replace(matchSpaces, '_')
}

export const Product = props => {
  const { title, image, price } = props
  const productId = formatTitleForUrl(title)
  return (
    <Link to={`/products/${productId}`}>
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
