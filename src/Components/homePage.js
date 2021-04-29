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
                <a href="#home" className="navbar__links" id="home-page">
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a href="#about" className="navbar__links" id="about-page">
                  Register
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#services"
                  className="navbar__links"
                  id="services-page"
                >
                  Chart
                </a>
              </li>
              <li className="navbar__btn">
                <a href="#sign-up" className="button" id="signup">
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
                <a href="#sign-up" className="button" id="signup">
                  Register New Patient
                </a>
              </li>

              <li className="option_links">
                <a href="#sign-up" className="button" id="signup">
                  Today's Chart
                </a>
              </li>
              <li className="option_links">
                <a href="#sign-up" className="button" id="signup">
                  Search
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
