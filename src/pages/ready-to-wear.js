import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Collection } from '../components/collection'

const ReadyToWearPage = ({ data }) => {
  const collections = data.allShopifyCollections.edges.map(({ node }) => node)
  return (
    <Layout>
      <div className="full-container">
        <h1 className="title has-text-black">Ready to Wear</h1>
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allShopifyCollections(sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          id
          title
          image {
            originalSrc
            transformedSrc
          }
          products {
            edges {
              node {
                id
                title
                slug
                variants {
                  edges {
                    node {
                      id
                      price
                      image {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ReadyToWearPage
