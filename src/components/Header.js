import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import headerStyles from "../styles/components/header.module.scss"

const Header = ({ page }) => {
  const el = useRef(null)
  const [offset, setOffset] = useState(false)
  const [active, setActive] = useState(false)
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
        offset || page !== "home" ? headerStyles.stacked : ""
      } `}
    >
      <div className={`${headerStyles.header__logo}`}>
        <Link to="/" className={`${headerStyles.header__logo__holder}`}>
          Logo
        </Link>
      </div>
      <button
        onClick={() => setActive(!active)}
        type="button"
        className={`${headerStyles.hamburger} ${
          active ? headerStyles.active : ""
        }`}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`${headerStyles.header__nav} ${
          active ? headerStyles.active : ""
        }`}
      >
        {page === "home" ? (
          <>
            <AnchorLink
              offset="20"
              onClick={() => setActive(false)}
              className={`${headerStyles.nav_link}`}
              href="#about"
            >
              About Us
            </AnchorLink>
            <AnchorLink
              onClick={() => setActive(false)}
              className={`${headerStyles.nav_link}`}
              href="#gallery"
            >
              Gallery
            </AnchorLink>
            <AnchorLink
              offset="20"
              onClick={() => setActive(false)}
              className={`${headerStyles.nav_link}`}
              href="#team"
            >
              Team
            </AnchorLink>
            <AnchorLink
              offset="20"
              onClick={() => setActive(false)}
              className={`${headerStyles.nav_link}`}
              href="#contact"
            >
              Contact
            </AnchorLink>
          </>
        ) : (
          <Link to="/" className={`${headerStyles.nav_link}`}>
            Home
          </Link>
        )}
        <Link to="/blog" className={`${headerStyles.nav_link}`}>
          Blog
        </Link>
      </nav>
    </div>
  )
}
export default Header
