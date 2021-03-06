require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "demic.dev",
    author: "Michele De Cillis",
    description:
      "Il portfolio di Michele De Cillis, web e mobile developer.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fq3dn6hlv6t0`,
        accessToken: process.env.GATSBY_CONTENTFUL_API,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@typesd": path.resolve(__dirname, '/types'),
          "@components": path.resolve(__dirname, '/src/components'),
          "@images": path.resolve(__dirname, '/assets/images/'),
        },
        extensions: [
          "js", "jsx", "ts", "tsx"
        ]
      }
    },
    `gatsby-plugin-tsconfig-paths`,
  ],
};
