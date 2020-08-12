import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import useTeamData from "../static_queries/useTeamData"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData()
  const teamData = useTeamData()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.childMarkdownRemark.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.childMarkdownRemark.fields.slug}`} key={blog.node.childMarkdownRemark.id}>
                <li className={blogListStyles.li} key={blog.node.childMarkdownRemark.fields.slug}>
                  <div className={blogListStyles.list__hero}>
                    <Img 
                      fluid={
                        blog.node.childMarkdownRemark.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.childMarkdownRemark.frontmatter.title}
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.childMarkdownRemark.frontmatter.title}</h2>
                    <h3>{blog.node.childMarkdownRemark.frontmatter.date}</h3>
                    <p>{blog.node.childMarkdownRemark.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

