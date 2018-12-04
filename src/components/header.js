import React from 'react'
import './style.scss'

import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <section className="hero hero-bg is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="is-uppercase is-size-1 has-text-white">Xing</h1>
              <p className="subtitle has-text-white is-size-3">
                <a
                  className="button is-inverted mr-36 hero-button"
                  href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
                >
                  <span>Discover More</span>
                </a>
                <a
                  className="button is-inverted hero-button"
                  href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
                >
                  <span>Shop Now</span>
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default Header
