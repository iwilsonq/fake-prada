import React, { useState } from 'react'
import { Link } from 'gatsby'
import shoppingbagSrc from '../images/shoppingbag.svg'

const CloseIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.44118 2.44118L16.9332 16.9332"
        stroke="#000"
        stroke-width="2.5"
        stroke-linecap="square"
      />
      <path
        d="M17 2L2 17"
        stroke="#000"
        stroke-width="2.5"
        stroke-linecap="square"
      />
    </svg>
  )
}

const BurgerIcon = () => {
  return (
    <React.Fragment>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </React.Fragment>
  )
}

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <nav className="navbar is-white is-fixed-top ">
      <div className="has-space-between navbar-content">
        <div className="is-flex is-hidden-mobile">
          <div className="navbar-item">
            <Link to="/ready-to-wear" className="has-text-black is-size-6">
              Ready to Wear
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="/streetwear-manifesto"
              className="has-text-black is-size-6"
            >
              The Streetwear Manifesto
            </Link>
          </div>
        </div>
        <div className="is-hidden-tablet">
          <button
            className="navbar-burger burger no-bg"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
        {mobileMenu ? (
          <div className="is-hidden-tablet">
            <div className="navbar-mobile-menu">
              <div className="navbar-item">
                <Link to="/ready-to-wear" className="has-text-black is-size-6">
                  Ready to Wear
                </Link>
              </div>
              <div className="navbar-item">
                <Link
                  to="/streetwear-manifesto"
                  className="has-text-black is-size-6"
                >
                  The Streetwear Manifesto
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/about" className="has-text-black is-size-6">
                  About
                </Link>
              </div>
            </div>
          </div>
        ) : null}
        <div className="navbar-brand is-full-middle">
          <div className="navbar-item">
            <Link to="/" className="has-text-black">
              <h1 className="is-uppercase is-size-3 navbar-brand-margin">
                DENNIS XING
              </h1>
            </Link>
          </div>
        </div>
        <div className="is-flex">
          <div className="navbar-item is-hidden-mobile">
            <Link to="/about" className="has-text-black is-size-6">
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/checkout">
              <div className="mt-5px">
                <img src={shoppingbagSrc} alt="shopping bag" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
