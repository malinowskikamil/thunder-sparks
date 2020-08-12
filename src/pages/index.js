import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import HeroHeader from "../components/HeroHeader"
import SocialIcons from "../components/SocialIcons"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <HeroHeader />
      <SocialIcons />
    </Layout>
  )
}
