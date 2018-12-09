import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
						instagram
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-black">
        <div className="full-width">
          <div className="mb-16">
            <article className="media">
              <span className="icon">
                <a href={data.site.siteMetadata.twitter}>
                  <FaTwitter size="fa-2x" color="white" />
                </a>
              </span>
              <span className="icon">
                <a href={data.site.siteMetadata.instagram}>
                  <FaInstagram size="fa-2x" color="white" />
                </a>
              </span>
            </article>
          </div>
          <div className="columns has-border-tb py-16">
            <div className="column is-three-fifths">
              <div className="columns">
                <div className="column">
                  <ul className="is-marginless has-list-style-none">
                    <li>
                      <a
                        href="/products"
                        className="is-uppercase has-text-white is-size-7"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="/ready-to-wear" className="has-text-white is-size-7">
                        Ready to Wear
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <a
                    href="/about"
                    className="is-uppercase has-text-white is-size-7"
                  >
                    About us
                  </a>
                </div>
                <div className="column">
                  <a
                    href="/legal"
                    className="is-uppercase has-text-white is-size-7"
                  >
                    Legal
                  </a>
                </div>
                <div className="column">
                  <a
                    href="/client-services"
                    className="is-uppercase has-text-white is-size-7"
                  >
                    Client Services
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <label
                htmlFor="email"
                className="is-uppercase has-text-white is-size-7"
              >
                <div className="mb-12">Newsletter</div>
                <input id="email" type="text" placeholder="yourname@mail.com" className="input" />
              </label>
            </div>
          </div>
          <p className="is-uppercase has-text-white">&copy; Dennis Xing 2018</p>
        </div>
      </footer>
    )}
  />
)

export default Footer
