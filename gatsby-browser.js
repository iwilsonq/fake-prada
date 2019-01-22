import React from 'react'
import { ShopifyContext, shopifyApi } from './src/components/shopify'

export const wrapRootElement = ({ element }) => {
  return (
    <div>
      <ShopifyContext.Provider value={shopifyApi}>
        {element}
      </ShopifyContext.Provider>
    </div>
  )
}
