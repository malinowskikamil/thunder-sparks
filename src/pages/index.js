import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import HeroHeader from "../components/HeroHeader"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <HeroHeader />
      <section>{/* <BlogList /> */}</section>
    </Layout>
  )
}
