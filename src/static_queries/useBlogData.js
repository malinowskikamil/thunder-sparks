import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                date(formatString: "MMMM Do, YYYY")
                author
                title
         
                short_description
              }
              excerpt(pruneLength: 200)
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges
}


      //  hero_image {
      //             childImageSharp {
      //               fluid(maxWidth: 800) {
      //                 ...GatsbyImageSharpFluid
      //               }
      //             }
      //           }