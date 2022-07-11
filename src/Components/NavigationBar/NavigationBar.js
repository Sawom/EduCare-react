import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import './NavigationBar.css'
const NavigationBar = () => {
    return (
    <Navbar className='backgroundColor' expand="lg">
      <Container>
        <Navbar.Brand > <img width='100px' src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav' to='/home'>Home</NavLink>
            <NavLink className='nav' to='/about'>About</NavLink>
            <NavLink className='nav' to='/services'>Services</NavLink>
            <NavLink className='nav' to='/best'>Best Seller</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};
export default NavigationBar;