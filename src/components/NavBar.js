import React, { Component } from "react";

// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Container>
            <Nav.Link className="navbar-brand" href="/">
              NewsMonkey
            </Nav.Link>

            <Nav className="me-auto">
              <Nav.Link className="nav-Link " aria-current="page" href="/">
                Home
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/business">
                Business
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/entertainment">
                Entertainment
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/general">
                General
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/health">
                Health
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/science">
                Science
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/sports">
                Sports
              </Nav.Link>

              <Nav.Link className="nav-Link" href="/technology">
                Technology
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
