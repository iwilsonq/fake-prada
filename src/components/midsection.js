import React from 'react'
import './style.scss'
import womenSrc from '../images/women.png'
import menSrc from '../images/men.png'

const Midsection = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <article className="media">
            <div className="mt-280">
              <div className="media-content">
                <div className="content">
                  <p className="is-size-1 has-text-black">Women</p>
                </div>
              </div>
              <figure className="media-left">
                <img src={womenSrc} alt="women" />
              </figure>
            </div>
          </article>
        </div>
        <div className="column">
          <article className="media">
            <div>
              <figure className="media-left">
                <img src={menSrc} alt="men" />
              </figure>
              <div className="media-content">
                <div className="content">
                  <p className="is-size-1 has-text-black">Men</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default Midsection
