import {createContext, useState, useEffect } from 'react'
import Client from 'shopify-buy'

const isBrowser = () => typeof window !== 'undefined'
const getLocalStorageItem = key =>
  isBrowser() && window.localStorage.getItem(key)
    ? window.localStorage.getItem(key)
    : ''

const setLocalStorageItem = (key, item) =>
  isBrowser() && window.localStorage.setItem(key, item)

const initializeClient = () => {
  const shopifyConfig = {
    domain: `${process.env.GATSBY_SHOPIFY_DOMAIN}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
  }

  return Client.buildClient(shopifyConfig)
}

export const useCheckout = () => {
  let shopifyClient = initializeClient()
  const id = getLocalStorageItem('checkoutId')
  const [checkoutId, setCheckoutId] = useState(id || '')
  const [lineItems, setLineItems] = useState([])
  const [checkout, setCheckout] = useState({})

  useEffect(() => {
    if (!checkoutId) {
      shopifyClient.checkout.create().then(checkout => {
        setCheckoutId(checkout.id)
        setLocalStorageItem('checkoutId', checkout.id)
        setCheckout(checkout)
      })
    } else {
      shopifyClient.checkout.fetch(checkoutId).then(checkout => {
        setCheckoutId(checkout.id)
        setLineItems(checkout.lineItems)
        setCheckout(checkout)
      })
    }
  }, [])

  const addLineItems = lineItems => {
    return shopifyClient.checkout
      .addLineItems(checkoutId, lineItems)
      .then(checkout => setLineItems(checkout.lineItems))
      .catch(e => console.error(e))
  }

  const removeLineItems = lineItems =>
    shopifyClient.checkout
      .removeLineItems(checkoutId, lineItems)
      .then(checkout => setLineItems(checkout.lineItems))

  return {
    checkout,
    lineItems,
    addLineItems,
    removeLineItems
  }
}

export const CheckoutContext = createContext({
  addLineItems: () => {},
  removeLineItems: () => {},
  lineItems: [],
  checkout: {},
})
