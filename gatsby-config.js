module.exports = {
  siteMetadata: {
    title: "Blog",
    titleTemplate: "%s · Blog template",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'gatsby-prismic-blog-rep',
        accessToken: 'MC5ZT2Eza3hNQUFDSUFwSHZu.Ke-_vQLvv71iYO-_vXENLe-_vWNy77-977-9XRQgI--_vTPvv70n77-977-9W--_ve-_ve-_vX8I77-9',
        schemas: {
          post: require("./src/schemas/articles.json")
        },
      }
    },
],
}
