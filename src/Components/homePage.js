import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./assets/navbar";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="Homepage">
        <Navbar />

        <section class="contents  grey darken-4">
          <div class="options container">
            <Link to="/Register" className="button" id="signup">
              <a class="waves-effect waves-light btn-large">Register</a>
            </Link>

            <Link to="/Records" className="button" id="signup">
              <a class="waves-effect waves-light btn-large">Records</a>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
