import React from 'react'
import { Formik, Form } from 'formik'
import { textConstants } from '../../constants/text'

export const CheckoutAsGuest = props => {
  return (
    <div className="checkout-right">
      <h2 className="title center">Checkout as Guest</h2>
      <Formik
        onSubmit={() => {
          window.open(props.checkout.webUrl)
        }}
      >
        {() => (
          <Form>
            <div className="checkout-button-wrapper">
              <button className="default-button small mb-36" type="submit">
                Checkout
              </button>
              <p className="fine-print">{textConstants.accountDisclaimer}</p>
              <br />
              <p className="fine-print">
                {textConstants.unsubscribeDisclaimer}
              </p>
              <p className="fine-print">{textConstants.privacyDisclaimer}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
