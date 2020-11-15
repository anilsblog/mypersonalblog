module.exports = {
  siteMetadata: {
    title: `Anils Blog`,
    author: {
      name: `Anil Nair`,
      summary: `Entreprenuer in the day, and Technology nerd by night`,
      email:`blog@anilsblog.in`,
    },
    description: `A Blog about many things`,
    siteUrl: `https://anilsblog.in`,
    social: {
      twitter: `anils_blog`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-VJQPTRL1GQ`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anils Blog`,
        short_name: `My Personal Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/an_icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Anils Blog",
        short_name: "My Personal Blog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "standalone",
        icon: "content/assets/an_icon.svg", 
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
