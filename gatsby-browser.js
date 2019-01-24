import React from 'react'
import { CheckoutContext } from './src/components/checkout-context'
import { useCheckout } from './src/components/use-checkout'

const CheckoutProvider = props => {
  const { lineItems, removeLineItems, addLineItems } = useCheckout()

  const value = {
    addLineItems,
    removeLineItems,
    lineItems
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
