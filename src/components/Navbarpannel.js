import React from 'react'
import { useAccordionButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbarpannel() {
    const cartProducts= useSelector (state=>state.cart)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link }>products</Nav.Link>
            
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to="/cart" as={Link } >Cart{cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      

      
        
     
    </div>
  )
}

export default Navbarpannel
