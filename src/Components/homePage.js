import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="Homepage">
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" id="navbar__logo">
              Patient Database
            </Link>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <Link to="/" className="navbar__links" id="home-page">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/Register" className="navbar__links" id="about-page">
                  Register
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="/Records"
                  className="navbar__links"
                  id="services-page"
                >
                  Records
                </Link>
              </li>
              <li className="navbar__btn">
                <Link to="/" className="button" id="signup">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div id="contents">
          <div id="options">
            <ul>
              <li className="option_links">
                <Link to="/Register" className="button" id="signup">
                  Register New Patient
                </Link>
              </li>

              <li className="option_links">
                <Link to="/Records" className="button" id="signup">
                  Records
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
