import React from 'react'
import Hero from '../components/hero'
import Midsection from '../components/midsection'
import Layout from '../components/layout'

const getQueryParams = () => {
  if (!window || !window.location.search) {
    return {}
  }

  const queryParams = window.location.search.slice(1).split('&')

  return queryParams.reduce((params, queryParam) => {
    const [key, value] = queryParam.split('=')

    return {
      ...params,
      [key]: value
    }
  }, {})
}

const IndexPage = () => {
  const queryParams = getQueryParams()
  return (
    <Layout fullNavbar>
      <div className={queryParams.border === 'true' ? 'has-layout-border' : ''}>
        <Hero />
        <Midsection />
      </div>
    </Layout>
  )
}

export default IndexPage
