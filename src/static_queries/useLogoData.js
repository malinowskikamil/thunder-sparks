import { graphql, useStaticQuery } from "gatsby"

export default function useLogoData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                logo{
                  url: publicURL
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges[0].node.childMarkdownRemark.frontmatter
}
