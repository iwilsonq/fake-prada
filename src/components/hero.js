import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Header = ({ siteTitle }) => (
  <section className="hero hero-bg">
    <div className="hero-body lower">
      <div className="container">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="hero-title">Xing</h1>
              <div className="is-flex-tablet">
                <div className="mr-36 mb-16">
                  <Link
                    className="button is-inverted hero-button"
                    to="/ready-to-wear"
                  >
                    Discover More
                  </Link>
                </div>
                <div>
                  <Link
                    className="button is-inverted hero-button"
                    to="/ready-to-wear"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default Header
