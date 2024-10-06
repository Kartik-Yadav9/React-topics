import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RootLayout() {

  const cartProducts= useSelector(state=>state.cart)
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Redux-toolkit</Navbar.Brand>
        
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to= '/' as={Link} >Products</Nav.Link>
            <Nav.Link to= '/cart' as={Link} className='justify-content-end' >Cart {cartProducts.length}</Nav.Link>
        
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout