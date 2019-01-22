import { useState, useEffect } from 'react'
import { shopifyApi } from './shopify'

export const useCheckout = (id = localStorage.getItem('checkoutId')) => {
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
