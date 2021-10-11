import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <Link to="/" id="brand-logo">
            &nbsp;Patient Database
          </Link>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/" className="navbar__links" id="home-page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Register" className="navbar__links" id="about-page">
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/Records"
              className="navbar__links"
              id="services-page"
            ></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
