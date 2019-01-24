import React, { useContext } from 'react'
import closeIconSrc from '../../static/assets/close.svg'
import { CheckoutContext } from './checkout-context'

const Receipt = props => {
  const subtotal = props.lineItems.reduce((total, curr) => {
    const lineItemPrice = Number(curr.variant.price)
    return (total += lineItemPrice)
  }, 0)

  const subtotalStr = `$${subtotal}`
  const shipping = 'FREE'

  const zip = 90210
  const salesTax = Number(Number.parseFloat(subtotal * 0.0725).toFixed(2))
  const salesTaxStr = `$${salesTax}`

  const totalStr = `$${subtotal + salesTax}`

  return (
    <div className="checkout-receipt">
      <div className="space-between">
        <span>Subtotal</span>
        <span>{subtotalStr}</span>
      </div>
      <div className="space-between">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>
      <div className="space-between estimated-tax">
        <span>Estimated tax for: {zip}</span>
        <span>{salesTaxStr}</span>
      </div>
      <div className="space-between">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>{totalStr}</strong>
        </span>
      </div>
    </div>
  )
}

const LineItem = props => {
  // const __html = props.attrs.descriptionHtml

  return (
    <tr className="line-item">
      <td>
        <img
          className="product-image"
          src={props.variant.image.src}
          alt={props.variant.image.altText}
        />
      </td>
      <td className="line-item-description">
        <h3>{props.title}</h3>
        {/* <div dangerouslySetInnerHTML={{ __html }} /> */}
      </td>
      <td className="has-text-align-right">${props.variant.price}</td>
      <td className="has-text-align-right">
        <button className="image-button" onClick={props.onRemove}>
          <img src={closeIconSrc} alt="remove item" />
        </button>
      </td>
    </tr>
  )
}

export const OrderSummary = props => {
  const { lineItems, removeLineItems } = useContext(CheckoutContext)

  const handleRemoveLineItem = lineItemId => () => {
    removeLineItems([lineItemId])
  }

  return (
    <div>
      <h2 className="title center">Shopping Bag</h2>

      {lineItems.length ? (
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
            {lineItems.map(lineItem => (
              <LineItem
                key={lineItem.id}
                onRemove={handleRemoveLineItem(lineItem.id)}
                {...lineItem}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="center">Your cart is currently empty </p>
      )}
      {lineItems.length ? <Receipt lineItems={lineItems} /> : null}
    </div>
  )
}
