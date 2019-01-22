import React from 'react'

import { ShopifyContext } from '../components/shopify'
import Layout from '../components/layout'
import { ShoppingBag } from '../components/shopping-bag'
import { CheckoutAsGuest } from '../components/checkout-as-guest'
import { Login } from '../components/login'

const CheckoutPage = props => {
  return (
    <Layout>
      <ShopifyContext.Consumer>
        {({ fetchCheckout, removeLineItems, checkoutId, setLineItems, lineItems }) => {
          return (
            <div className="checkout-page pb-96 mt-160 mobile-margins">
              <div className="columns">
                <div className="column is-half">
                  <ShoppingBag
                    fetchCheckout={fetchCheckout}
                    removeLineItems={removeLineItems}
                    setLineItems={setLineItems}
                    lineItems={lineItems}
                    checkoutId={checkoutId}
                  />
                </div>
                <div className="column is-half">
                  <CheckoutAsGuest />
                  <Login />
                </div>
              </div>
            </div>
          )
        }}
      </ShopifyContext.Consumer>
    </Layout>
  )
}

export default CheckoutPage
