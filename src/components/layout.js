import React from 'react'
import Helmet from './helmet'

import Footer from './footer'
import { Navbar } from './navbar'
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