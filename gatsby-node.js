const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query BlogPages {
      allPrismicArticles {
        nodes {
          id
          uid
          slugs
        }
      }
    }  
  `)

  const pageTemplates = path.resolve(`./src/templates/BlogPost/BlogPost.js`)

  pages.data.allPrismicArticles.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplates,
      context: {
        id: node.id,
        slug: node.slugs[0],
      },
    })
  })
}