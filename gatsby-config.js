require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "demic.dev",
    author: "Michele De Cillis",
    description:
      "Il portfolio di Michele De Cillis, un web e mobile developer.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
  ],
};
