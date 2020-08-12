import { graphql, useStaticQuery } from "gatsby"

export default function useHomeData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "home" } }) {
        edges {
          node {
            hero: childMarkdownRemark {
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
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
