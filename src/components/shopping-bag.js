import React, { useEffect } from 'react'
import closeIconSrc from '../../static/assets/close.svg'
import rishiSrc from '../images/rishi_h-1b.jpg'

const Receipt = props => {
  return (
    <div className="checkout-receipt">
      <div className="space-between">
        <span>Subtotal</span>
        <span>$129.00</span>
      </div>
      <div className="space-between">
        <span>Shipping</span>
        <span>FREE</span>
      </div>
      <div className="space-between estimated-tax">
        <span>Estimated tax for: 90210</span>
        <span>$12.90</span>
      </div>
      <div className="space-between">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>$131.90</strong>
        </span>
      </div>
    </div>
  )
}

export const ShoppingBag = props => {
  useEffect(
    () => {
      props.fetchCheckout(props.checkoutId)
    },
    [props.checkoutId]
  )
  return (
    <div>
      <h2 className="title center">Shopping Bag</h2>
      <table className="line-items">
        <thead>
          <tr>
            <th />
            <th>Item</th>
            <th className="has-text-align-right">Price</th>
            <th className="has-text-align-right">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="line-item">
            <td>
              <img className="product-image" src={rishiSrc} alt="rishi" />
            </td>
            <td className="line-item-description">
              <h3>Immigrants will make america great again</h3>
              <p>Black Classic Long Sleeve T Shirt</p>
              <p>Size Large</p>
            </td>
            <td className="has-text-align-right">$129.00</td>
            <td className="has-text-align-right">
              <img src={closeIconSrc} alt="remove item" />
            </td>
          </tr>
        </tbody>
      </table>
      <Receipt />
    </div>
  )
}
