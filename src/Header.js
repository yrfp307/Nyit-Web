import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
  background: palevioletred;
  font-size: 1em;
  margin-bottom: 50px;
}`;

export default function Header() {
  return (
      <Styles>
      <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">NyitNyit Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/About">About</Link></Nav.Link>
      <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </Styles>
 );
}
