import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const Gallery = ({ data }) => {
  return (
    <>
      <section className="py-4 mt-4 galery" id="galleries">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h1>Gallery</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Col>
          </Row>

          <Row>
            {
              data &&
              data.map(item => (
                <Col key={item.id} md="4" className="mt-3">
                  <Card>
                    <Card.Img style={{ width: '100%', height: '300px', fit: 'cover' }} className="object-fit-cover" variant="top" src={item.image} />
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Gallery
