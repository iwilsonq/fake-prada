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

export const CustomerInformation = props => {
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
            <h3 className="title is-size-4">Shipping Address</h3>
            <Field name="firstName" label="First Name" component={TextInput} />
            <Field name="lastName" label="Last Name" component={TextInput} />
            <Field name="street" label="Street" component={TextInput} />
            <Field name="city" label="City" component={TextInput} />
            <Field
              name="state"
              label="State or Province"
              component={TextInput}
            />
            <Field
              name="zip"
              label="Zip or Postal Code"
              component={TextInput}
            />
            <Field name="country" label="Country" component={TextInput} />
            <Field name="phone" label="Phone Number" component={TextInput} />
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
