import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import HeroHeader from "../components/HeroHeader"
import About from "../components/About"
import SocialIcons from "../components/SocialIcons"
import layoutStyles from "../styles/components/layout.module.scss"
export default function IndexPage() {
  return (
    <Layout page="home">
      <HeroHeader />
      <main className={layoutStyles.index__main}>
        <About />
        <SocialIcons />
      </main>
    </Layout>
  )
}
