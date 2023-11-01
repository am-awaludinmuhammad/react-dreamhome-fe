import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = ({ data = {} }) => {
  const { socials } = data;

  return (
    <>
      <section className="footer pb-3 pt-4 bg-dark">
        <Container>
          <Row>
            <Col>
              <h5 className="fw-bold text-white">Dreamhome</h5>
            </Col>
            <Col className="text-end text-white">
              {
                socials && 
                socials.map(item => {
                  const {id, name, url, iconClass} = item;
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
      </section>
    </>
  )
}

export default Footer
