import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default () => (
  <Layout>
    <Title text="Welcome" />
    <p>
      This site will help you learn how to create modern sites with GatsbyJS,
      React, and GraphQL and other modern technologies.
    </p>
    <ArticleList />
  </Layout>
)
