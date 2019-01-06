import React from 'react'
import Hero from '../components/hero'
import Midsection from '../components/midsection'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout fullNavbar>
    <div className="has-layout-border">
      <Hero />
      <Midsection />
    </div>
  </Layout>
)

export default IndexPage
