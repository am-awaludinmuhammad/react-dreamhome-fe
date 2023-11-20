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
import { useFormik } from 'formik';
import userService from '../services/userService';
import InputFeedback from '../components/InputFeedback';
import { getInputErrorMessages } from '../lib/helpers';

const Register = () => {
    const [validation, setValidation] = useState({})
    const navigate = useNavigate()
    const formData = {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value);
    }

    const formik = useFormik({
        initialValues: formData,
        onSubmit: async () => {
            try {
                const response = await userService.registerUser(formik.values);
                if (response.data) {
                    navigate('/login');
                }
            } catch (error) {
                const errors = getInputErrorMessages(error);
                setValidation(errors)
            }
            
        }
    });

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
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="name" value={formik.values.name} type="text" placeholder="Enter full name" />
                                        <InputFeedback message={validation.name}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="username" value={formik.values.username} type="text" placeholder="Enter username" />
                                        <InputFeedback message={validation.username}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="email" value={formik.values.email} type="email" placeholder="Enter email" />
                                        <InputFeedback message={validation.email}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="password" value={formik.values.password} type="password" placeholder="Password" />
                                        <InputFeedback message={validation.password}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="passwordConfirmation">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="password_confirmation" value={formik.values.password_confirmation} type="password" placeholder="Password" />
                                        <InputFeedback message={validation.password_confirmation}/>
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
