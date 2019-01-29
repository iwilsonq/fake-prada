import React, { useState, useContext } from 'react'
import { CheckoutContext } from '../hooks/use-checkout'

import Layout from '../components/layout'
import { OrderSummary } from '../components/checkout/order-summary'
import { CheckoutAsGuest } from '../components/checkout/checkout-as-guest'
import { CustomerInformation } from '../components/checkout/customer-information'
import { ShippingMethod } from '../components/checkout/shipping-method'
// import { ShippingMethod } from '../components/shipping-method'
import { checkoutSteps } from '../constants/checkout'

const Breadcrumbs = ({ step }) => {
  if (!step || step === checkoutSteps.checkoutAsGuest) {
    return null
  }

  return (
    <nav
      className="is-flex breadcrumb has-succeeds-separator"
      aria-label="breadcrumbs"
    >
      <li>
        <button className="link-button">Bag</button>
      </li>
      <li
        className={
          step === checkoutSteps.customerInformation ? 'is-active' : ''
        }
      >
        <button className="link-button">Customer Information</button>
      </li>
      <li className={step === checkoutSteps.shippingMethod ? 'is-active' : ''}>
        <button className="link-button">Shipping Method</button>
      </li>
      <li className={step === checkoutSteps.paymentMethod ? 'is-active' : ''}>
        <button className="link-button">Payment Method</button>
      </li>
    </nav>
  )
}

const CheckoutStep = ({ step, ...props }) => {
  switch (step) {
    case checkoutSteps.customerInformation:
      return <CustomerInformation {...props} />
    case checkoutSteps.shippingMethod:
      return <ShippingMethod {...props} />
    case checkoutSteps.paymentMethod:
      return <ShippingMethod {...props} />
    case checkoutSteps.checkoutAsGuest:
    default:
      return <CheckoutAsGuest {...props} />
  }
}

const CheckoutPage = props => {
  const { checkout } = useContext(CheckoutContext)
  const [checkoutStep, setCheckoutStep] = useState(
    checkoutSteps.checkoutAsGuest
  )

  return (
    <Layout>
      <div className="checkout-page pb-96 mt-160 mobile-margins">
        <div className="columns is-desktop">
          <div className="column">
            <OrderSummary />
          </div>
          <div className="column">
            <Breadcrumbs
              step={checkoutStep}
              setCheckoutStep={setCheckoutStep}
            />
            <CheckoutStep
              step={checkoutStep}
              setCheckoutStep={setCheckoutStep}
              checkout={checkout}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutPage
