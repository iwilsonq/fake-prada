import React, { useState } from 'react'
import Layout from '../components/layout'
import { OrderSummary } from '../components/order-summary'
import { CustomerInformation } from '../components/customer-information'
import { CheckoutAsGuest } from '../components/checkout-as-guest'
import { checkoutSteps } from '../constants/checkout'
// import { Login } from '../components/login'

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
        <button className="link-button">PaymentMethod</button>
      </li>
    </nav>
  )
}

const CheckoutStep = ({ step, ...props }) => {
  switch (step) {
    case checkoutSteps.customerInformation:
      return <CustomerInformation {...props} />
    case checkoutSteps.shippingMethod:
    case checkoutSteps.paymentMethod:
    case checkoutSteps.checkoutAsGuest:
    default:
      return <CheckoutAsGuest {...props} />
  }
}

const CheckoutPage = props => {
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
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutPage
