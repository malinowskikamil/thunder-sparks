import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import layoutStyles from "../styles/components/layout.module.scss"
//this component handles the blur img & fade-ins

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const prevSlug = getPrevSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.childMarkdownRemark.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return null
    }
  }
  function getPrevSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.childMarkdownRemark.fields.slug
    })
    const prevSlug = allSlugs[allSlugs.indexOf(slug) - 1]
    if (prevSlug !== undefined && prevSlug !== "") {
      return prevSlug
    } else {
      return null
    }
  }

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <div
          className={blogTemplateStyles.blog__hero}
          style={{
            backgroundImage: `url(${data.frontmatter.hero_image.childImageSharp.fluid.src})`,
          }}
        >
          <div className={blogTemplateStyles.blog__info}>
            <h1>{data.frontmatter.title}</h1>
            <h3>{data.frontmatter.date}</h3>
          </div>
        </div>
        <div className={layoutStyles.container}>
          <div
            className={blogTemplateStyles.blog__body}
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
          <div className={blogTemplateStyles.blog__footer}>
            {prevSlug && (
              <Link
                to={`/blog/${prevSlug}`}
                className={blogTemplateStyles.footer__prev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 26 26"
                  enableBackground="new 0 0 26 26"
                >
                  <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
                </svg>
              </Link>
            )}
            <h3>Author: {data.frontmatter.author}</h3>
            {nextSlug && (
              <Link
                to={`/blog/${nextSlug}`}
                className={blogTemplateStyles.footer__next}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 26 26"
                  enableBackground="new 0 0 26 26"
                >
                  <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
