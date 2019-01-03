import React from 'react'
import { Link } from 'gatsby'
import { FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa'

import './style.scss'

export const FullNavbar = () => (
  <div className="is-hidden-mobile">
    <nav className="navbar has-background-black">
      <div className="full-width">
        <div id="navbarMenuHeroA" className="navbar-menu level">
          <div className="level-left">
            <span className="navbar-item has-text-white">
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              <span>Ships to: United States</span>
            </span>
          </div>
          <div className="level-right has-text-white">
            <span className="navbar-item has-text-white">
              <span className="icon">
                <FaShoppingBag />
              </span>
            </span>
          </div>
        </div>

        <div className="center">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/" className="has-text-white">
                <h1 className="is-uppercase is-size-1 has-text-white navbar-brand-margin">
                  DENNIS XING
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="center has-border-tb">
          <div className="navbar-item">
            <Link to="/ready-to-wear" className="has-text-white">
              Ready to Wear
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/streetwear-manifesto" className="has-text-white">
              The Streetwear Manifesto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export const CondensedNavbar = () => (
  <nav className="navbar is-black is-fixed-top">
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link to="/" className="has-text-white">
          <h1 className="is-uppercase is-size-3 navbar-brand-margin">
            DENNIS XING
          </h1>
        </Link>
      </div>
      <div className="navbar-burger">
        <button
          className="navbar-burger burger no-bg"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-item">
        <Link to="/ready-to-wear" className="has-text-white is-size-6">
          Ready to Wear
        </Link>
      </div>
      <div className="navbar-item">
        <Link to="/streetwear-manifesto" className="has-text-white is-size-6">
          The Streetwear Manifesto
        </Link>
      </div>
    </div>
  </nav>
)

export const Navbar = props => {
  return props.fullNavbar ? (
    <FullNavbar {...props} />
  ) : (
    <CondensedNavbar {...props} />
  )
}

export default Navbar