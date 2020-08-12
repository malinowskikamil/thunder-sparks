import { graphql, useStaticQuery } from "gatsby"

export default function useHomeData() {
  const data = useStaticQuery(graphql`
    {
      hero: allFile(filter: { sourceInstanceName: { eq: "hero" } }) {
        edges {
          node {
            childMarkdownRemark {
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
      about: allFile(filter: { sourceInstanceName: { eq: "about" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                title
                subtitle
                description
              }
            }
          }
        }
      }
    }
  `)
  return {
    hero: data.hero.edges[0].node.childMarkdownRemark.frontmatter,
    about: data.about.edges[0].node.childMarkdownRemark.frontmatter,
  }
}
