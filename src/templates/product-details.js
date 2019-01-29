import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import Layout from '../components/layout'
import { CheckoutContext } from '../hooks/use-checkout'

const SIZES = [
  {
    label: 'S',
    value: 'small'
  },
  {
    label: 'M',
    value: 'medium'
  },
  {
    label: 'L',
    value: 'large'
  },
  {
    label: 'XL',
    value: 'xlarge'
  }
]

const Sizes = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="is-flex sizes">
      {SIZES.map(size => {
        const selected = size.value === selectedSize.value ? 'selected' : ''
        return (
          <button
            key={size.value}
            className={`size-button ${selected}`}
            onClick={() => setSelectedSize(size)}
          >
            {size.label}
          </button>
        )
      })}
    </div>
  )
}

const MobileProductDetails = props => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="product-details-mobile is-hidden-tablet mt-72">
      <Slider {...sliderSettings}>
        {props.images.edges.map(({ node }, index) => (
          <img key={node.id} src={node.src} alt={`product ${index}`} />
        ))}
      </Slider>
      <div className="center-column-stretch">
        <h2 className="is-size-5">{props.title}</h2>
        <div className="price is-size-3">${props.variant.price}</div>
        <div className="full-width">
          <Sizes
            selectedSize={props.selectedSize}
            setSelectedSize={props.setSelectedSize}
          />
          <button className="default-button" onClick={props.handlePurchase}>
            Purchase
          </button>
        </div>
      </div>
      <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: props.descriptionHtml }}
      />
    </div>
  )
}

const WidescreenProductDetails = props => {
  return (
    <div className="product-details-tablet columns is-hidden-mobile">
      <div className="column is-one-third">
        <div className="mt-160">
          <div className="is-fixed has-fixed-width">
            <h2 className="is-size-5">{props.title}</h2>
            <div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: props.descriptionHtml }}
            />
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="mt-72">
          {props.images.edges.map(({ node }, index) => (
            <img key={node.id} src={node.src} alt={`product ${index}`} />
          ))}
        </div>
      </div>
      <div className="column is-one-third">
        <div className="mt-160">
          <div className="is-fixed has-fixed-width">
            <div className="center-column">
              <div className="price is-size-3">${props.variant.price}</div>
              <div>
                <Sizes
                  selectedSize={props.selectedSize}
                  setSelectedSize={props.setSelectedSize}
                />
                <button
                  className="default-button"
                  onClick={props.handlePurchase}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductDetails = ({ pageContext, navigate }) => {
  const { addLineItems } = useContext(CheckoutContext)
  const { node } = pageContext
  const { title, descriptionHtml, images, variants } = node
  const variant = variants.edges[0].node
  const [selectedSize, setSelectedSize] = useState(SIZES[0])
  const props = {
    title,
    descriptionHtml,
    images,
    variant,
    selectedSize,
    setSelectedSize
  }

  const updatedLineItems = [{ variantId: variant.id, quantity: 1 }]

  const handlePurchase = () => {
    addLineItems(updatedLineItems).then(() => navigate('/checkout'))
  }

  return (
    <Layout>
      <div className="container pb-96 mobile-margins">
        <WidescreenProductDetails handlePurchase={handlePurchase} {...props} />
        <MobileProductDetails handlePurchase={handlePurchase} {...props} />
      </div>
    </Layout>
  )
}

export default ProductDetails
