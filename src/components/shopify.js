import React from 'react'
import Client from 'shopify-buy'

const initializeShopify = () => {
  console.log('initializeShopify')
  const shopifyConfig = {
    domain: `${process.env.GATSBY_SHOPIFY_DOMAIN}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
  }

  const shopifyClient = Client.buildClient(shopifyConfig)

  const createCheckout = () => {
    return shopifyClient.checkout.create().then(checkout => {
      console.log('checkout.id', checkout.id)
      return checkout.id
    })
  }

  const fetchCheckout = checkoutId => {
    return shopifyClient.checkout.fetch(checkoutId).then(checkout => {
      console.log('checkout.id', checkout.id)
      return checkout.id
    })
  }

  return {
    createCheckout,
    fetchCheckout
  }
}

export const shopifyApi = initializeShopify()
export const ShopifyContext = React.createContext(shopifyApi)
