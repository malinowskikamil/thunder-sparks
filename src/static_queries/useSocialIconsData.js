import { graphql, useStaticQuery } from "gatsby"

export default function useSocialIconsData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "social_icons" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                phone
                email
                facebook
                linkedin
                instagram
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges[0].node.childMarkdownRemark.frontmatter
}
