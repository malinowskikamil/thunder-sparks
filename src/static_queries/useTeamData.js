import { graphql, useStaticQuery } from "gatsby"

export default function useTeamData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "team" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                facebook_link
                linkedin_link
                name
                position
                short_description
                image {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
