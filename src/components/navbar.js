import React from 'react'
import {
  FaMapMarkerAlt,
  FaHeart,
  FaSearch,
  FaShoppingBag
} from 'react-icons/fa'

import './style.scss'

const Navbar = () => (
  <div className="hero-head is-hidden-mobile has-background-black">
    <nav className="navbar">
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
              <span>Login</span>
            </span>
            <span className="navbar-item has-text-white">
              <span className="icon">
                <FaHeart />
              </span>
            </span>
            <span className="navbar-item has-text-white">
              <span className="icon">
                <FaShoppingBag />
              </span>
            </span>
            <span className="navbar-item has-text-white">
              <span className="icon">
                <FaSearch />
              </span>
            </span>
          </div>
        </div>

        <div className="center">
          <div className="navbar-brand">
            <div className="navbar-item">
              <h1 className="is-uppercase is-size-1 has-text-white navbar-brand-margin">
                DENNIS XING
              </h1>
            </div>
          </div>
        </div>
        <div className="center has-border-tb">
          <div className="navbar-item">
            <a href="/women" className="has-text-white">
              Women
            </a>
          </div>
          <div className="navbar-item">
            <a href="/men" className="has-text-white">
              Men
            </a>
          </div>
          <div className="navbar-item">
            <a href="/streetwear-manifesto" className="has-text-white">
              The Streetwear Manifesto
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
