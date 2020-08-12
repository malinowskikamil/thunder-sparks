import { graphql, useStaticQuery } from "gatsby"

export default function useTeamData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "team" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                author
                facebook_link
                linkedin_link
                name
                position
                short_description
                title
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
