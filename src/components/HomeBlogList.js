import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import layoutStyles from "../styles/components/layout.module.scss"
import blogListStyles from "../styles/components/homebloglist.module.scss"
const BlogPostList = ({ data }) => (
  <div className={`${layoutStyles.container__lime}`}>
    <div className={`${layoutStyles.container}`}>
      <div className={`${layoutStyles.header}`}>
        <h2>Latest News</h2>
      </div>
      <div className={`${blogListStyles.wrapper}`}>
        {data &&
          data.length > 0 &&
          data.map(
            ({
              node: {
                childMarkdownRemark: { excerpt, fields, id, frontmatter },
              },
            }) => {
              return (
                <Link
                  className={`${blogListStyles.item}`}
                  to={`/blog/${fields.slug}`}
                  key={id}
                >
                  <div
                    className={`${blogListStyles.item__image}`}
                    style={{
                      backgroundImage: `url(${frontmatter.hero_image.childImageSharp.fluid.src})`,
                    }}
                  />
                  <div className={`${blogListStyles.item__content}`}>
                    <h3 className={`${blogListStyles.item__title}`}>
                      <Link to={`/blog/${fields.slug}`}>
                        {frontmatter.title}
                      </Link>
                    </h3>
                    <p className={`${blogListStyles.item__description}`}>
                      {excerpt}
                    </p>
                    <div className={`${blogListStyles.item__details}`}>
                      <p className={`${blogListStyles.item__details__author}`}>
                        {frontmatter.author}
                      </p>
                      <p className={`${blogListStyles.item__details__data}`}>
                        {frontmatter.date}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            }
          )}
      </div>
    </div>
  </div>
)

export default function HomeBlogList(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            limit: 3
            sort: {
              order: DESC
              fields: childMarkdownRemark___frontmatter___date
            }
            filter: { sourceInstanceName: { eq: "posts" } }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  id
                  excerpt(pruneLength: 200)
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    author
                    date(formatString: "MMMM Do, YYYY")
                    hero_image {
                      childImageSharp {
                        fluid(maxWidth: 400) {
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
      `}
      render={({ allFile }) => <BlogPostList data={allFile.edges} {...props} />}
    />
  )
}
