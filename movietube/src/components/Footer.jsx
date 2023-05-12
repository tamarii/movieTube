import React from "react";
import "../App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function FooterLine() {
  return (
    <Navbar className="footernav" expand="lg">
      <Container fluid>
        <NavLink className="nabrand" to="/">
          MovieTube App
        </NavLink>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <div className="d-flex">
          Copyright ⓒ2023 All rights reserved by:{" "}
          <span className="copyright">Tamar Elmakayes</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default FooterLine;
