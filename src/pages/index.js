import React from 'react'
import Hero from '../components/hero'
import Midsection from '../components/midsection'
import Layout from '../components/layout'

const getQueryParams = location => {
  if (!location.search) {
    return {}
  }

  const queryParams = location.search.slice(1).split('&')

  return queryParams.reduce((params, queryParam) => {
    const [key, value] = queryParam.split('=')

    return {
      ...params,
      [key]: value
    }
  }, {})
}

const IndexPage = ({ location }) => {
  const queryParams = getQueryParams(location)
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
