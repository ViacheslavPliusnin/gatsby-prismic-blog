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
          data {
            category {
              text
            }
            author {
              text
            }
          }
        }
      }
    }  
  `)

  const pageTemplates = path.resolve(`./src/templates/BlogPost/BlogPost.js`)
  const categoryTemplates = path.resolve(`./src/templates/Categories/Categories.js`)
  const authorTemplates = path.resolve(`./src/templates/Authors/Authors.js`)

  pages.data.allPrismicArticles.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplates,
      context: {
        id: node.id,
        slug: node.slugs[0],
      },
    })
    createPage({
      path: `/categories/${node.data.category[0].text}`,
      component: categoryTemplates,
      context: {
        category: node.data.category[0].text,
      },
    })
    createPage({
      path: `/authors/${node.data.author[0].text}`,
      component: authorTemplates,
      context: {
        author: node.data.author[0].text,
      },
    })
  })
}