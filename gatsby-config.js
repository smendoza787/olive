if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'Quicksand: Full Stack Dev Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    `gatsby-plugin-typescript`,
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Slab`, `Pacifico`, `Fredoka One`],
      },
    },
  ],
}
