import React from "react"
import Markdown from "react-markdown"
import layoutStyles from "../styles/components/layout.module.scss"
import useHomeData from "../static_queries/useHomeData"
const About = () => {
  const {
    about: { title, subtitle, description },
  } = useHomeData()

  return (
    <div className={`${layoutStyles.container}`} id="about">
      <div className={`${layoutStyles.header}`}>
        {title && <h2>{title}</h2>}
        {subtitle && <p className={`${layoutStyles.subtitle}`}>{subtitle}</p>}
      </div>
      {description && (
        <Markdown
          className={`${layoutStyles.description}`}
          source={description}
        />
      )}
    </div>
  )
}

export default About
