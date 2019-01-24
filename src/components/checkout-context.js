import React from 'react'

export const CheckoutContext = React.createContext({
  addLineItems: () => {},
  removeLineItems: () => {},
  lineItems: []
})
