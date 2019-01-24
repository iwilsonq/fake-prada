import React, { useState } from 'react'
import { TextInput } from './text-input'
import { checkoutSteps } from '../constants/checkout'

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
  const [shippingAddressForm, changeForm] = useState(initialValues)
  const changeField = event => {
    const { value, name } = event.target
    changeForm({ ...shippingAddressForm, [name]: value })
  }
  return (
    <div>
      <div className="customer-information">
        <h3 className="title is-size-4">Shipping Address</h3>
        <form onSubmit={e => e.preventDefault()}>
          <TextInput
            name="firstName"
            label="First Name"
            onChange={changeField}
            value={shippingAddressForm.firstName}
          />
          <TextInput
            name="lastName"
            label="Last Name"
            onChange={changeField}
            value={shippingAddressForm.lastName}
          />
          <TextInput
            name="street"
            label="Street"
            onChange={changeField}
            value={shippingAddressForm.street}
          />
          <TextInput
            name="city"
            label="City"
            onChange={changeField}
            value={shippingAddressForm.city}
          />
          <TextInput
            name="state"
            label="State or Province"
            onChange={changeField}
            value={shippingAddressForm.state}
          />
          <TextInput
            name="zip"
            label="Zip or Postal Code"
            onChange={changeField}
            value={shippingAddressForm.zip}
          />
          <TextInput
            name="country"
            label="Country"
            onChange={changeField}
            value={shippingAddressForm.country}
          />
          <TextInput
            name="phone"
            label="Phone Number"
            onChange={changeField}
            value={shippingAddressForm.phone}
          />
        </form>
      </div>
      <div className="customer-information-footer">
        <button
          className="default-button medium"
          onClick={() => props.setCheckoutStep(checkoutSteps.shippingMethod)}
        >
          Continue to Shipping Method
        </button>
      </div>
    </div>
  )
}
