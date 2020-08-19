import React from "react"
import Helmet from 'react-helmet'
import Layout from "../components/Layout"
import { Link, StaticQuery, graphql } from "gatsby"
import layoutStyles from "../styles/components/layout.module.scss"
import blogListStyles from "../styles/components/bloglist.module.scss"
const BlogList = ({ data }) => {
  return (
    <Layout page="blog">
    <Helmet title={'Blog - Thunder Sparks'} />
      <main className={`${blogListStyles.blog_container}`}>
        <div className={`${layoutStyles.container}`}>
          <div className={`${layoutStyles.header}`}>
            <h2>Blog</h2>
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
                      </div>
                        <div className={`${blogListStyles.item__details}`}>
                          <p>{frontmatter.author}</p>
                          <p>{frontmatter.date}</p>
                        </div>
                    </Link>
                  )
                }
              )}
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default function Blog(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
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
      render={({ allFile }) => <BlogList data={allFile.edges} {...props} />}
    />
  )
}
