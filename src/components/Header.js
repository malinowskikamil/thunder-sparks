import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"
import useSocialIconsData from "../static_queries/useSocialIconsData"
import useLogoData from "../static_queries/useLogoData"

const Header = ({ page }) => {
  const el = useRef(null)
  const { phone } = useSocialIconsData()
  const { logo } = useLogoData()
  console.log(logo)
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
        {logo && (
          <Link to="/" className={`${headerStyles.header__logo__holder}`}>
            <img src={logo.url} alt="Logo" />
          </Link>
        )}
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
        {page !== "home" && (
          <Link to="/" className={`${headerStyles.nav_link}`}>
            Home
          </Link>
        )}
        <Link to="/blog" className={`${headerStyles.nav_link}`}>
          Blog
        </Link>
        {phone && (
          <a href={`tel:${phone}`} className={`${headerStyles.nav_link}`}>
            {phone}
          </a>
        )}
      </nav>
    </div>
  )
}
export default Header
