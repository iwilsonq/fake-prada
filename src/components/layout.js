import React from 'react'
import Helmet from './helmet'

import Footer from './footer'
import { Navbar } from './Navbar'
import './style.scss'

const Layout = ({ children, fullNavbar }) => {
  console.log(process.env)
  return (
    <div className={fullNavbar ? 'has-layout-border' : ''}>
      <Helmet />
      <Navbar fullNavbar={fullNavbar} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout