import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const NavigationBar = () => {
  const [changeColor, setChangeColor] = useState(false)
  const auth = false;

  const changeBackgroundColor = () => {
    if (window.scrollY > 120) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);
  })
  const location = useLocation();
  const brandOnly = ['/register', '/login'].includes(location.pathname)
    ? true
    : false

  return (
    <Navbar
      className={`sticky-top navbar-dark ${changeColor ? 'color-active' : ''} ${brandOnly ? 'bg-dark' : ''}`}
      variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Dreamhome
        </Navbar.Brand>

        {
          brandOnly ? null :
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home" className="me-2">Home</Nav.Link>
                  <Nav.Link href="#galleries" className="me-2">Gallery</Nav.Link>
                  <Nav.Link href="#services" className="me-2">Service</Nav.Link>
                  <Nav.Link href="#faq" className="me-2">FAQ</Nav.Link>
                </Nav>
                {
                  auth ?
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/profile" className="me-2">Profile</Nav.Link>
                    </Nav> :
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/login" className="me-2">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register" className="me-2">Register</Nav.Link>
                    </Nav>
                }
              </Navbar.Collapse>
            </>
        }
      </Container>
    </Navbar>
  )
}

export default NavigationBar
