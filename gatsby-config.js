const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Python Brasil 2022`,
    siteUrl: `https://2022.pythonbrasil.org.br`
  },
  plugins: [{
    resolve: "gatsby-plugin-sass",
    options: {
      additionalData: `@import "${__dirname}/src/assets/sass/_exportable.scss";`,
    }
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "123456"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@configs": path.resolve(__dirname, "src/configs"),
        "@sass": path.resolve(__dirname, "src/assets/sass"),
        "@vendor": path.resolve(__dirname, "src/assets/vendor")
      },
      extensions: [
        "js", "scss"
      ]
    }
  }]
};