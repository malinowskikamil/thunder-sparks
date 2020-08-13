const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //get slugs
  const response = await graphql(`
    {
      allFile(
        sort: { order: DESC, fields: childMarkdownRemark___frontmatter___date }
        filter: { sourceInstanceName: { eq: "posts" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  //create new pages with unique slug
  response.data.allFile.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.childMarkdownRemark.fields.slug}`,
      context: {
        slug: edge.node.childMarkdownRemark.fields.slug,
      },
    })
  })
}
