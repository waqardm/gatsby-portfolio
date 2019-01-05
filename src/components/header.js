import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// const script = require('../main.js') 
const Header = ({ siteTitle }) => (
  <div>
    <header>
      {/* <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div> */}

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="blog.js">Blog</Link></li>
          <li><Link to="portfolio.js">Portfolio</Link></li>
          <li><Link to="contact.js">Contact</Link></li>
        </ul>
      </nav>
      </header>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Portfolio - Waqar Mohammad`,
}

export default Header
