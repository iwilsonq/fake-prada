import React from 'react'
import { TextInput } from '../form/text-input'
import { checkoutSteps } from '../../constants/checkout'
import { Formik, Form, Field } from 'formik'

const initialValues = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  phone: ''
}

export const PaymentMethod = props => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values)
        actions.setSubmitting(false)
        props.setCheckoutStep(checkoutSteps.shippingMethod)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="customer-information">
            <h3 className="title is-size-4">Payment Method</h3>
            <Field
              name="cardholderName"
              label="Cardholder's Name"
              component={TextInput}
            />
            <div className="is-flex">
              <Field
                name="cardNumber"
                label="Card Number"
                component={TextInput}
              />
              <Field name="cvv" label="CVV" component={TextInput} />
            </div>
          </div>
          <div className="customer-information-footer">
            <button
              className="default-button medium"
              disabled={isSubmitting}
              type="submit"
            >
              Continue to Shipping Method
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
