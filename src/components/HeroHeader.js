import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import useHomeData from "../static_queries/useHomeData"

const HeroHeader = () => {
  const data = useHomeData()
  const {
    node: { hero: hero_data },
  } = data.find(({ node }) => node.hasOwnProperty("hero"))
  return (
    <div className={`${heroStyles.hero}`}>
      <div
        className={`${heroStyles.hero__background}`}
        style={{
          backgroundImage: `url(${hero_data.frontmatter.image.childImageSharp.fluid.src})`,
        }}
      />
      <div className={`${heroStyles.blacklayer}`} />
      <div className={`${heroStyles.hero__content}`}>
        <h1>{hero_data.frontmatter.title}</h1>
      </div>
    </div>
  )
}

export default HeroHeader
