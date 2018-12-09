import React, { useState, useEffect } from 'react'
import { setConfig } from 'react-hot-loader'

import shopify from '../services/shopify'
import Layout from '../components/layout'
import { Product } from '../components/Product'

setConfig({ pureSFC: true })

console.log(process.env)

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    shopify.product
      .fetchAll()
      .then(products => {
        return products.map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.variants[0].price,
          available: product.variants[0].available,
          image: {
            src: product.variants[0].image.src,
            altText: product.variants[0].image.altText
          }
        }))
      })
      .then(setProducts)
      .catch(e => console.error(e))
  }, [])

  return products
}

const ReadyToWearPage = () => {
  const products = useProducts()
  return (
    <Layout>
      <div className="container my-72">
        <h1 className="title">Ready to Wear</h1>
        <div className="columns">
          {products.map(product => (
            <div className="column" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ReadyToWearPage
