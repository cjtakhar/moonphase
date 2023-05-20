import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { BsMoonStars, BsPersonBoundingBox, BsPencil} from 'react-icons/bs';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <Navbar className="navigation" expand="lg">
      <Navbar.Brand className="navbrand" as={Link} to="/moonphase">{ < BsMoonStars />}</Navbar.Brand>
      <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="collapse" id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link className="nav-link" as={Link} to="/astro">astro</Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/tarot">tarot</Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/fortune">fortune</Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/healing">healing</Nav.Link>
          <Nav.Link className="nav-link" as={Link} to="/protection">protection</Nav.Link>
          <div className="nav-links2">
          <Nav.Link className="nav-link2" as={Link} to="/account">{ < BsPersonBoundingBox />}</Nav.Link>
          <Nav.Link className="nav-link2" as={Link} to="/journal">{ < BsPencil /> }</Nav.Link>
          </div>
         </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
