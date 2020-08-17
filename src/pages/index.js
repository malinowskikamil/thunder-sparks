import React from "react"
import Layout from "../components/Layout"
import HomeBlogList from "../components/HomeBlogList"
import HeroHeader from "../components/HeroHeader"
import About from "../components/About"
import SocialIcons from "../components/SocialIcons"
import Gallery from "../components/Gallery"
import layoutStyles from "../styles/components/layout.module.scss"
import SimpleReactLightbox from "simple-react-lightbox"

export default function IndexPage() {
  return (
    <Layout page="home">
      <HeroHeader />
      <SocialIcons />
      <main className={layoutStyles.index__main}>
        <About />
        <HomeBlogList />
        <SimpleReactLightbox>
          <Gallery />
        </SimpleReactLightbox>
      </main>
    </Layout>
  )
}
