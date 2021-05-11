import React, { Component } from "react"

class Homepage extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div id="Homepage">
        <nav className="navbar">
          <div className="navbar__container">
            <a href="#home" id="navbar__logo">
              Patient Database
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="/" className="navbar__links" id="home-page" >
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a href="/Register" className="navbar__links" id="about-page">
                  Register
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="/Records"
                  className="navbar__links"
                  id="services-page"
                >
                  Records
                </a>
              </li>
              <li className="navbar__btn">
                <a href="/" className="button" id="signup">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="contents">
          <div id="options">
            <ul>
              <li className="option_links">
                <a href="/Register" className="button" id="signup">
                  Register New Patient
                </a>
              </li>

              <li className="option_links">
                <a href="/Records" className="button" id="signup">
                  Records
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
