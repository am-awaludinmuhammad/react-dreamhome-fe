import React, { useState } from 'react';
import {
    Button,
    Form,
    Container,
    Card,
    Row,
    Col
} from 'react-bootstrap';
import Layout from '../pages/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const baseUrl = 'http://localhost:9000/api/v1/users';
    const navigate = useNavigate()
    const formData = {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    const [responseBody, setResponseBody] = useState(formData);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register(responseBody)
    }

    const register = async ({ name, username, email, password, password_confirmation }) => {

        try {
            const response = await axios.post(baseUrl, { name, username, email, password, password_confirmation });
            if (response.data.data.id) {
                navigate('/login')
            }
        } catch (error) {
            console.log(error.stack)
        }
    }

    return (
        <Layout>
            <Container className="auth-container">
                <Row>
                    <Col md="5" sm="12" className="mx-auto">
                        <h3 className="text-center py-4">Welcome to Dreamhome</h3>
                        <Card className="mt-4 mb-4">
                            <Card.Body>
                                <Card.Title className="text-center">Register</Card.Title>
                                <hr />
                                <Form onSubmit={onSubmitHandler}>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control onChange={(e) => inputChangeHandler(e)} name="name" type="text" placeholder="Enter full name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={(e) => inputChangeHandler(e)} name="username" type="text" placeholder="Enter username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={(e) => inputChangeHandler(e)} name="email" type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(e) => inputChangeHandler(e)} name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="passwordConfirmation">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control onChange={(e) => inputChangeHandler(e)} name="password_confirmation" type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 mt-2">
                                        Register
                                    </Button>
                                    <div className="py-3 text-center">
                                        <hr />
                                        Already have an account? <Link to="/login">Login</Link>
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

export default Register
