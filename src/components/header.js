import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaInstagram, FaLink, FaTwitter } from "react-icons/all"

const Header = ({ siteTitle, social, links }) => (
  <header className="flex items-center text-blue-800">
    <div className="mx-auto mt-10 mb-5">
      <img className="w-32 mx-auto shadow-lg rounded-full" src="https://pbs.twimg.com/profile_images/1348343075987468296/8LNftXTJ_400x400.jpg"/>
      <h1 className="mt-5">
        <Link
          className="font-black text-2xl"
          to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="mt-3 flex mx-auto justify-around">
        <a href={"https://www.instagram.com/" + social.instagram}><FaInstagram/></a>
        <a href={"https://twitter.com/" + social.twitter}><FaTwitter/></a>
        {links.map(link => <a href={link}><FaLink/></a>)}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
