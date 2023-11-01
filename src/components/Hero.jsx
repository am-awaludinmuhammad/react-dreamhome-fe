import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="hero min-vh-100 w-100">
      <Container>
        <Row>
          <Col className="text-white">
            <h1>Find Your Dream Home.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe dignissimos optio expedita voluptatem.
            </p>
            <Button className="mt-3 btn-lg">Explore</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
