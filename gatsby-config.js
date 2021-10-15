/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@shaundychko",
    person: {
      name: "shaun",
      age: 41,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "shaun",
        age: 41,
      },
      {
        name: "susan",
        age: 21,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-faker`,
      options: {
        schema: {
          name: [`firstName`, `lastName`],
          address: [`streetAddress`, `streetName`, `city`, `state`, `zipCode`],
          internet: [`email`],
          lorem: [`paragraph`, `paragraphs`, `word`, `sentence`],
          phone: [`phoneNumber`],
        },
        count: 1,
        type: `PersonalData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mv7b5arfdeib`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`400`],
            },
            {
              family: `Inconsolata`,
              variants: [`400`, `500`, `600`, `700`],
            },
          ],
        },
      },
    },
  ],
}
