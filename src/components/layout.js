import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>My New Gatsby Blog 2019</Footer>
  </div>
)
