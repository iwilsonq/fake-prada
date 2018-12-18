import React from 'react'

export const Product = props => {
  const { title, image, price } = props
  return (
    <article className="product-card">
      <header>
        <figure>
          <img src={image.src} alt={image.altText} />
        </figure>
        <p>{title}</p>
      </header>

      <span>{`$ ${price}`}</span>
    </article>
  )
}
