import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

export default client
