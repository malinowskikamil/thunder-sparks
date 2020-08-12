import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import headerStyles from "../styles/components/header.module.scss"

const Header = ({ page }) => {
  const el = useRef(null)
  const [offset, setOffset] = useState(false)
  const handleScroll = event => {
    setOffset(window.scrollY > window.innerHeight - el.current.clientHeight)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <div
      ref={el}
      className={`${headerStyles.header} ${
        offset ? headerStyles.stacked : ""
      } `}
    >
      <div className={`${headerStyles.header__logo}`}>
        <Link to="/" className={`${headerStyles.header__logo__holder}`}>
          Logo
        </Link>
      </div>
      <nav className={`${headerStyles.header__nav}`}>
        <Link to="/blog" className={`${headerStyles.nav_link}`}>
          Blog
        </Link>
        {page === "home" && (
          <>
            <AnchorLink
              className={`${headerStyles.nav_link}`}
              to="#about"
              title="About Us"
            />
            <AnchorLink
              className={`${headerStyles.nav_link}`}
              to="#contact"
              title="Contact"
            />
            <AnchorLink
              className={`${headerStyles.nav_link}`}
              to="#team"
              title="Team"
            />
          </>
        )}
      </nav>
    </div>
  )
}
export default Header
