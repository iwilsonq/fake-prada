import React, { useState } from 'react'
import { TextInput } from './text-input'
import { textConstants } from '../constants/text'
import { checkoutSteps } from '../constants/checkout'

export const CheckoutAsGuest = props => {
  const [email, setEmail] = useState('')
  return (
    <div className="checkout-right">
      <h2 className="title center">Checkout as Guest</h2>
      <form onSubmit={e => e.preventDefault()}>
        <TextInput
          name="email"
          label="Email Address"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <div className="checkout-button-wrapper">
          <button
            className="default-button small mb-36"
            onClick={() =>
              props.setCheckoutStep(checkoutSteps.customerInformation)
            }
          >
            Checkout
          </button>
          <p className="fine-print">{textConstants.accountDisclaimer}</p>
          <br />
          <p className="fine-print">{textConstants.unsubscribeDisclaimer}</p>
          <p className="fine-print">{textConstants.privacyDisclaimer}</p>
        </div>
      </form>
    </div>
  )
}
