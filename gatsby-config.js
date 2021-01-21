module.exports = {
  siteMetadata: {
    title: `los links de Raúl`,
    description: `Agregador de links rss`,
    social: {
      twitter: 'raulsperoni',
      instagram: 'raulsperoni'
    },
    links: ['https://unbaul.com', 'https://recetario.unbaul.com']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `links.unbaul`,
        short_name: `links`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1e40af`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://unbaul.com/rss.xml`,
        name: `Blog`,
        parserOption: {
          customFields: {
            item: ['featuredImage']
          }
        }
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://recetario.unbaul.com/rss.xml`,
        name: `Recetario`,
        parserOption: {
          customFields: {
            item: ['featuredImage']
          }
        }
      }
    }
  ],
}
