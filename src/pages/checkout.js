import React from 'react'

import { ShopifyContext } from '../components/shopify'
import Layout from '../components/layout'
import { ShoppingBag } from '../components/shopping-bag'

const CheckoutPage = props => {
  return (
    <Layout>
      <ShopifyContext.Consumer>
        {({ fetchCheckout, checkoutId }) => {
          return (
            <div className="checkout-page pb-96 mt-160 mobile-margins">
              <div className="columns" style={{ height: '100vh' }}>
                <div className="column is-half">
                  <ShoppingBag
                    fetchCheckout={fetchCheckout}
                    checkoutId={checkoutId}
                  />
                </div>
                <div className="column is-half">
                  <h2 className="title center">Checkout as Guest</h2>
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
