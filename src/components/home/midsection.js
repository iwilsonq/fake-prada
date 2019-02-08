import React from 'react'
import { Link } from 'gatsby'
import rishi from '../../images/rishi.png'
import h1bBoyband from '../../images/h-1b_boyband_1.png'
import microsoft from '../../images/microsoft.jpg'
import crossing from '../../images/CROSSING.png'
import google from '../../images/google_sign_expats.jpg'
import h1bGang from '../../images/h-1b_gang.png'

const Midsection = () => (
  <section className="section">
    <div className="container">
      <div className="mb-128">
        <div className="columns">
          <div className="column">
            <article className="media mb-10">
              <div className="midsection-1">
                <img src={rishi} alt="rishi" className="mb-16" />
                <div className="max-width-700">
                  <p className="big-lead center">
                    What does it mean to be American?
                  </p>
                </div>
                <Link to="/ready-to-wear">
                  <button className="default-button small is-uppercase">
                    Shop Women
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mb-128">
        <div className="columns is-flex-mobile">
          <div className="column col-5-12-tablet col-1-2-mobile">
            <article className="media flex-start mb-10">
              <div className="midsection-2">
                <figure className="media-left">
                  <img src={h1bBoyband} alt="h1bBoyband" />
                </figure>
              </div>
            </article>
          </div>
          <div className="column col-7-12-tablet col-1-2-mobile">
            <article className="media flex-start mb-10">
              <div className="midsection-2">
                <h3 className="header-3">Ready to Wear</h3>
                <p>Resort 2019</p>
                <Link to="/ready-to-wear">
                  <button className="default-button small is-uppercase">
                    Shop Men
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mb-128">
        <div className="columns is-flex-mobile">
          <div className="column col-7-12-tablet col-1-2-mobile">
            <article className="media flex-end mb-10">
              <div className="midsection-3 ">
                <h3 className="header-3 is-right">Who are you?</h3>
                <Link to="/ready-to-wear">
                  <button className="default-button small is-uppercase">
                    Discover your identity
                  </button>
                </Link>
              </div>
            </article>
          </div>
          <div className="column col-5-12-tablet col-1-2-mobile">
            <article className="media flex-start mb-10">
              <div className="midsection-3">
                <figure className="media-left">
                  <img src={microsoft} alt="microsoft" />
                </figure>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mb-128">
        <div className="columns">
          <div className="is-full">
            <img src={google} alt="google" />
          </div>
        </div>
      </div>
      <div className="mb-128">
        <div className="columns">
          <div className="column">
            <article className="media mb-10">
              <div className="midsection-crossing">
                <img src={crossing} alt="crossing" className="mb-16" />
                <Link to="/ready-to-wear">
                  <button className="default-button small is-uppercase">
                    Shop the look
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mb-128">
        <div className="columns">
          <div className="is-full">
            <div className="max-width-700 mh-auto">
              <p className="big-lead center mb-24">
                What is the American family?
              </p>
            </div>
            <img src={h1bGang} alt="h1b gang" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Midsection
