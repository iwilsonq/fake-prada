const path = require('path')
const crypto = require('crypto')

const formatTitleForUrl = (title = '') => {
  const matchSpaces = /\s/g
  return title.toLowerCase().replace(matchSpaces, '_')
}

const collectionQuery = /* GraphQL */ `
  query CollectionQuery {
    collections(first: 250) {
      edges {
        node {
          id
          title
          description
          updatedAt
          image {
            id
            altText
            originalSrc
            transformedSrc
          }
          products(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                createdAt
                updatedAt
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      id
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                        altText
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      id
                      src
                    }
                  }
                }
                description
                descriptionHtml
                productType
              }
            }
          }
        }
      }
    }
  }
`

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const client = require('graphql-client')({
    url: `https://${
      process.env.GATSBY_SHOPIFY_DOMAIN
    }.myshopify.com/api/graphql`,
    headers: {
      'X-Shopify-Storefront-Access-Token':
        process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
    }
  })

  const response = await client.query(collectionQuery)

  if (
    response &&
    response.data &&
    response.data.collections &&
    response.data.collections.edges
  ) {
    response.data.collections.edges.forEach(({ node }) => {
      node.parent = null
      node.children = []
      node.products.edges = node.products.edges.map(({ node }) => {
        const slug = formatTitleForUrl(node.title)
        return {
          node: {
            ...node,
            slug
          }
        }
      })
      node.internal = {
        mediaType: 'application/json',
        type: 'ShopifyCollections',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex'),
        content: JSON.stringify(node)
      }

      createNode(node)
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node_8`) {
    const slug = formatTitleForUrl(node.title)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ getNodes, actions }) => {
  const { createPage } = actions
  const productNodes = getNodes().filter(
    node => node.internal.type === 'ShopifyProducts'
  )

  productNodes.forEach(node => {
    const slug = formatTitleForUrl(node.title)
    createPage({
      path: `products/${slug}`,
      component: path.resolve(`./src/templates/product-details.js`),
      context: {
        slug,
        node
      }
    })
  })
}
