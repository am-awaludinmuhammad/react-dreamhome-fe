import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Service = ({ data }) => {
  return (
    <>
      <section className="service py-4 mb-4" id="services">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h1 className="section-title">Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row className="text-center">
            {
              data &&
              data.map(item => {
                const {id, name, desc, iconClass} = item
                
                return (
                  <Col key={id} md="4" className="border py-4">
                    <i className={`${iconClass} mb-4`}></i>
                    <h4>{ name }</h4>
                    <p>{ desc }</p>
                  </Col>
                )
              })
            }            
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Service
