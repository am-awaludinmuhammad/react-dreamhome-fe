import React from 'react'
import { Row, Col, Container, Accordion } from 'react-bootstrap'

const Faq = ({ data }) => {
  return (
    <>
      <section className="py-4 mt-4" id="faq">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h1 className="section-title">Faq</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
          <Row>
            {
              data &&
              data.map(item => {
                const { id, question, answer } = item;

                return (
                  <Col key={id} md="6" className="mb-3">
                    <Accordion>
                      <Accordion.Item eventKey={id}>
                        <Accordion.Header>{question}</Accordion.Header>
                        <Accordion.Body>
                          {answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
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

export default Faq
