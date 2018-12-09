import React from 'react'

export const Product = props => {
  return (
    <article>
      <img
        style={{ width: '90%' }}
        src={props.product.image.src}
        alt={props.product.image.altText}
      />
    </article>
  )
}
