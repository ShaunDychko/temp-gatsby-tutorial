var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const path = require("path")
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop" || stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [new CaseSensitivePathsPlugin()],
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`./src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
