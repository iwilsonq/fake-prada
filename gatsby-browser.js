import Client from 'shopify-buy'

export const onInitialClientRender = () => {
  const shopifyConfig = {
    domain: process.env.GATSBY_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
  }

  window.shopify = Client.buildClient(shopifyConfig)
}
