import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import useHomeData from "../static_queries/useHomeData"

const HeroHeader = () => {
  const {
    hero: { title, image },
  } = useHomeData()

  return (
    <div className={`${heroStyles.hero}`}>
      <div
        className={`${heroStyles.hero__background}`}
        style={{
          backgroundImage: `url(${image.childImageSharp.fluid.src})`,
        }}
      />
      <div className={`${heroStyles.blacklayer}`} />
      <div className={`${heroStyles.hero__content}`}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default HeroHeader
