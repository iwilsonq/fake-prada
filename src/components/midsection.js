import React from 'react'
import './style.scss'
import microsoft from '../images/microsoft.jpg'
import google from '../images/google_sign_expats.jpg'
import android from '../images/bikes_silver_android.jpg'

const Midsection = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <article className="media flex-end mb-223">
            <div className="midsection-1">
              <figure className="media-right">
                <img src={microsoft} alt="microsoft" />
              </figure>
            </div>
          </article>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <article className="media flex-start mb-223">
            <div className="midsection-2">
              <figure className="media-left">
                <img src={google} alt="google" />
              </figure>
            </div>
          </article>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <article className="media flex-end mb-223">
            <div className="midsection-3">
              <figure className="media-right">
                <img src={android} alt="bikes_silver_android" />
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default Midsection
