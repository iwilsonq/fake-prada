import React from 'react'
import Client from 'shopify-buy'

const initializeShopify = () => {
  const shopifyConfig = {
    domain: `${process.env.GATSBY_SHOPIFY_DOMAIN}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
  }

  const shopifyClient = Client.buildClient(shopifyConfig)

  const createCheckout = () => {
    return shopifyClient.checkout.create().then(checkout => {
      localStorage.setItem('checkoutId', checkout.id)
      return checkout.id
    })
  }

  const addLineItems = (checkoutId, lineItems) => {
    return shopifyClient.checkout
      .addLineItems(checkoutId, lineItems)
      .then(checkout => checkout.lineItems)
      .catch(e => console.error(e))
  }
  
  const removeLineItems = (checkoutId, lineItems) => {
    return shopifyClient.checkout
      .removeLineItems(checkoutId, lineItems)
      .then(checkout => checkout.lineItems)
      .catch(e => console.error(e))
  }

  const fetchCheckout = (checkoutId = localStorage.getItem('checkoutId')) => {
    if (!checkoutId) {
      return Promise.reject('fetchCheckout: No stored checkout id')
    }

    return shopifyClient.checkout
      .fetch(checkoutId)
      .then(checkout => {
        return checkout
      })
      .catch(e => console.error(e))
  }

  return {
    createCheckout,
    fetchCheckout,
    addLineItems,
    removeLineItems,
    lineItems: [],
    setLineItems: () => {},
    checkoutId: '',
    setCheckoutId: () => {}
  }
}

export const shopifyApi = initializeShopify()
export const ShopifyContext = React.createContext(shopifyApi)
