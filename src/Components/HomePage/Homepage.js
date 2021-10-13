import React, { Component } from "react";
import { NavBar } from "../Navbar/navbar";
import { Col, Row, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";
class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="top-container">
        <section className="navbar-container">
          <NavBar />
        </section>
        <section className="vector-and-actions-container ">
          <Row>
            <Col xs={8} className="img-home-background">
              <img
                src="./home-page-images/solid-red-background.jpg"
                className="img-fluid img-home"
              ></img>
            </Col>
            <Col xs={4} className="col align-self-center">
              <div className="row container-fluid">
                <Link
                  to="/Records"
                  className=" d-flex flex-column navbar-link text-white"
                >
                  <Button variant="danger" className="">
                    Register New Patient
                  </Button>
                </Link>
              </div>
              <div className="row container-fluid mt-3">
                <Link
                  to="/Records"
                  className=" d-flex flex-column navbar-link text-white"
                >
                  <Button variant="danger" className=" ">
                    Records
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Homepage;
