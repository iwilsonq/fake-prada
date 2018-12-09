import Client from 'shopify-buy'

const {
  GATSBY_SHOPIFY_DOMAIN,
  GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN
} = process.env

const client = Client.buildClient({
  domain: GATSBY_SHOPIFY_DOMAIN,
  storefrontAccessToken: GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN
})

export default client
