import React from 'react'
import { useCheckout, CheckoutContext } from './src/hooks/use-checkout'

const CheckoutProvider = props => {
  const { lineItems, removeLineItems, addLineItems, checkout } = useCheckout()

  const value = {
    addLineItems,
    removeLineItems,
    lineItems,
    checkout
  }

  return (
    <CheckoutContext.Provider value={value}>
      {props.children}
    </CheckoutContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <CheckoutProvider>{element}</CheckoutProvider>
}
