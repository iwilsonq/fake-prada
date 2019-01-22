import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { StaticQuery, graphql, Link } from 'gatsby'
import './style.scss'

const FooterLink = ({ to, label, className, uppercase }) => {
  let initialClassName = 'is-size-7'

  if (uppercase) {
    initialClassName += ' is-uppercase'
  }

  if (className) {
    initialClassName += ` ${className}`
  }

  return (
    <li>
      <Link to={to} className={initialClassName}>
        {label}
      </Link>
    </li>
  )
}

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
      <footer className="footer center has-background-white">
        <div className="full-width">
          <div className="mb-16 social">
            <article className="media">
              <span className="icon">
                <a href={data.site.siteMetadata.twitter}>
                  <FaTwitter color="black" />
                </a>
              </span>
              <span className="icon">
                <a href={data.site.siteMetadata.instagram}>
                  <FaInstagram color="black" />
                </a>
              </span>
            </article>
          </div>
          <div className="columns has-border-tb">
            <div className="column is-three-fifths">
              <div className="columns pt-16 wrap-columns">
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <ul className="is-marginless has-list-style-none">
                    <FooterLink to="/products" label="Product" uppercase />
                    <FooterLink to="/ready-to-wear" label="Ready to Wear" />
                  </ul>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <ul className="is-marginless has-list-style-none">
                    <FooterLink to="/about" label="About Us" uppercase />
                    <FooterLink
                      to="/streetwear-manifesto"
                      label="The Streetwear Manifesto"
                    />
                    <FooterLink to="/about" label="About" />
                    <FooterLink to="/about" label="About" />
                  </ul>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <ul className="is-marginless has-list-style-none">
                    <FooterLink to="/legal" label="Legal" uppercase />
                    <FooterLink to="/legal" label="Legal Notice" />
                    <FooterLink to="/privacy" label="Privacy Statement" />
                    <FooterLink to="/terms" label="Terms and Conditions" />
                  </ul>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <ul className="is-marginless has-list-style-none">
                    <FooterLink
                      to="/client-service"
                      label="Client Service"
                      uppercase
                    />
                    <FooterLink to="/contact-us" label="Contact Us" />
                    <FooterLink to="/faq" label="FAQ" />
                    <FooterLink to="/track" label="Track your order" />
                    <FooterLink to="/returns" label="Returns" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-hidden-mobile">
              <form
                onSubmit={e => e.preventDefault()}
                className="newsletter-signup pt-16"
              >
                <span className="newsletter-lead">
                  Exceptional quality. Art. Creativity. Radical ideas. Sign up
                  to enjoy free U.S. shipping on your first order.
                </span>
                <div className="is-relative">
                  <label htmlFor="email" className=" is-size-7">
                    <input id="email" type="text" />
                    <span className="floating-text">Email Address</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <p className="is-uppercase ">&copy; Dennis Xing 2018</p>
        </div>
      </footer>
    )}
  />
)

export default Footer
