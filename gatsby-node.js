const crypto = require('crypto')
const collectionQuery = `query CollectionQuery {
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
