import React from "react";
/* import { Link } from "react-router-dom"; */
import "../App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function HeaderNav() {
  return (
    <Navbar className="headernav" expand="lg">
      <Container fluid>
        <NavLink className="nabrand" to="/">
          MovieTube App
        </NavLink>
        <Navbar.Toggle className="burger" aria-controls="navbarScroll" />
        <Navbar.Collapse className="collapse" id="navbarScroll">
          <Nav
            className="collapset me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nalink" to="/About">
              About us
            </NavLink>
          </Nav>
          <NavLink className="nalink d-flex" to="/FavoritesPage">
            Favorites
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
