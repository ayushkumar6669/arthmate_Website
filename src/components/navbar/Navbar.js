import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../assets/images/fintech_company_logo.png';
import './navbar.css';

const MainNavbar = () => {
  const location = useLocation();

  return (
    <div className='navbg'>
    <Container>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="logo">
        <img src="https://www.arthmate.com/storage/company/2022-12-30-63ae7284252bc.png" alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/team"
            className={location.pathname === '/team' ? 'active' : ''}
          >
            Team
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            What do we do?
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </div>
  );
};

export default MainNavbar;
