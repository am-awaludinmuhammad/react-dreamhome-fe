import React from 'react'
import {
    Button,
    Form,
    Container,
    Card,
    Row,
    Col
} from 'react-bootstrap';
import Layout from '../pages/Layout';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md="5" sm="12" className="mx-auto">
                        <h3 className="text-center py-4">Welcome to Dreamhome</h3>
                        <Card className="mt-4 mb-4">
                            <Card.Body>
                                <Card.Title className="text-center">Login to Your Account</Card.Title>
                                <hr />
                                <Form>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 mt-2">
                                        Login
                                    </Button>
                                    <div className="py-3 text-center">
                                        <hr />
                                        New here? <Link to="/register">Register</Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Login
