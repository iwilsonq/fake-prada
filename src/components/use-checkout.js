import { useState, useEffect } from 'react'
import { shopifyApi } from './shopify'

const isBrowser = () => typeof window !== "undefined"
const getLocalStorageItem = () => isBrowser() && window.localStorage.getItem('checkoutId') ? window.localStorage.getItem('checkoutId') : ''

export const useCheckout = (id) => {
  if (!id) {
    id = getLocalStorageItem()
  }

  const [checkoutId, setCheckoutId] = useState(id || '')
  const [lineItems, setLineItems] = useState([])

  useEffect(() => {
    if (!checkoutId) {
      shopifyApi.createCheckout().then(checkout => {
        setCheckoutId(checkout.id)
      })
    } else {
      shopifyApi.fetchCheckout(checkoutId).then(checkout => {
        setCheckoutId(checkout.id)
        setLineItems(checkout.lineItems)
      })
    }
  }, [])

  const removeLineItems = (checkoutId, lineItems) =>
    shopifyApi.removeLineItems(checkoutId, lineItems).then(setLineItems)

  return {
    checkoutId,
    lineItems,
    removeLineItems
  }
}