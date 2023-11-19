import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import data from '../data.json';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { socials } = data.footers || {};
  const location = useLocation();
  const brandOnly = ['/register', '/login'].includes(location.pathname)
    ? true
    : false

  return (
      <footer className={`${brandOnly ? 'fixed-bottom': ''} pb-3 pt-4 bg-dark mt-auto`}>
        <Container>
          <Row>
            <Col>
              <h5 className="fw-bold text-white">Dreamhome</h5>
            </Col>
            <Col className="text-end text-white">
              {
                socials && 
                socials.map(item => {
                  const {id, iconClass} = item;
                  return (
                    <span key={id} className="mx-2"> <i className={iconClass}></i> </span>
                  )
                })
              }
            </Col>
          </Row>
          <Row>
            <Col className="text-center px-2">
              <p className="text-white-50">&copy; Copyright by Dreamhome { new Date().getFullYear() }, All Right reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer
