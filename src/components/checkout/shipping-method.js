import React from 'react'
import { Formik, Form, Field } from 'formik'
import { RadioInput } from '../form/radio-input'
import { checkoutSteps } from '../../constants/checkout'

export const ShippingMethod = props => {
  return (
    <div className="checkout-right">
      <h2 className="title center">Shipping Method</h2>
      <Formik
        initialValues={{ shippingMethod: '' }}
        onSubmit={values => {
          console.log(values)
          props.setCheckoutStep(checkoutSteps.paymentMethod)
        }}
      >
        {() => (
          <Form>
            <Field
              type="radio"
              name="shippingMethod"
              label="USPS Priority Mail"
              value="usps_priority_mail"
              component={RadioInput}
            />
            <Field
              type="radio"
              name="shippingMethod"
              label="UPS Express"
              value="ups_express"
              component={RadioInput}
            />
            <div className="checkout-button-wrapper">
              <button className="default-button small mb-36" type="submit">
                Continue to Payment Method
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
