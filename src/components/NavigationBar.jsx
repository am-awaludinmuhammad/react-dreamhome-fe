import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  const [changeColor, setChangeColor] = useState(false)

  const changeBackgroundColor = () => {
    if (window.scrollY > 80) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }
  
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  })

  return (
    <div className="sticky-top">
      <Navbar className={`navbar-dark ${changeColor ? 'color-active' : ''}`} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Dreamhome</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-2">Home</Nav.Link>
              <Nav.Link href="#galleries" className="me-2">Gallery</Nav.Link>
              <Nav.Link href="#services" className="me-2">Service</Nav.Link>
              <Nav.Link href="#faq" className="me-2">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
