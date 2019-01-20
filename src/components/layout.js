import React, { useState } from 'react'
import Helmet from './helmet'

import { ShopifyContext, shopifyApi } from './shopify'
import Footer from './footer'
import { Navbar } from './navbar'
import './style.scss'

const Layout = ({ children, fullNavbar }) => {
  const [checkoutId, setCheckoutId] = useState()
  const shopifyContext = {
    ...shopifyApi,
    checkoutId,
    setCheckoutId
  }

  return (
    <ShopifyContext.Provider value={shopifyContext}>
      <Helmet />
      <Navbar fullNavbar={fullNavbar} />
      {children}
      <Footer />
    </ShopifyContext.Provider>
  )
}

export default Layout
