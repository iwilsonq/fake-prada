require('dotenv').config({
  path: '.env.production'
})

module.exports = {
  siteMetadata: {
    title: 'Dennis Xing',
    author: 'Ian Wilson',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description: 'A Project to bootstrap your next Gatsby + Bulma site.',
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    twitter: 'https://twitter.com/dennis__xing',
    instagram: 'https://instagram.com/dennis__xing',
    xingdesign: 'https://xing--design.com/',
    siteUrl: 'https://www.example.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        // icon: 'src/images/gatsby-icon.png',
        orientation: 'portrait'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        siteName: process.env.GATSBY_SHOPIFY_DOMAIN,
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
