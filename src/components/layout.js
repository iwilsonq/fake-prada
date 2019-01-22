import React from 'react'

import Helmet from './helmet'
import { Navbar } from './navbar'
import Footer from './footer'
import './style.scss'

const Layout = ({ children, fullNavbar }) => {
  return (
    <div>
      <Helmet />
      <Navbar fullNavbar={fullNavbar} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
