import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function(props) {
  console.log(props)
  return (
    <div
      className={`${headerStyles.header} ${props.page === "info" &&
        headerStyles.info_page}`}
    >ss</div>
  )
}
