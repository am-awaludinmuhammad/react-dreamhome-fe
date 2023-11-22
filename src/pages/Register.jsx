import React, { useState } from 'react';
import {
    Button,
    Form,
    Container,
    Card,
    Row,
    Col,
    Alert
} from 'react-bootstrap';
import Layout from '../pages/Layout';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import InputFeedback from '../components/InputFeedback';
import { useRegisterUser } from '../hooks/useRegisterUser';

const Register = () => {
    const { registerUser, errors, isLoading } = useRegisterUser();

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
            await registerUser(formik.values);
        }
    });

    return (
        <Layout>
            <Container className="auth-container">
                <Row>
                    <Col md="5" sm="12" className="mx-auto">
                        <h3 className="text-center py-4">Welcome to Dreamhome</h3>
                        {
                            errors?.message
                            ? <Alert variant="danger">
                                {errors.message}
                            </Alert>
                            : null
                        }

                        <Card className="mt-4 mb-4">
                            <Card.Body>
                                <Card.Title className="text-center">Register</Card.Title>
                                <hr />
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="name" value={formik.values.name} type="text" placeholder="Enter full name" />
                                        <InputFeedback message={errors?.field?.name} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="username" value={formik.values.username} type="text" placeholder="Enter username" />
                                        <InputFeedback message={errors?.field?.username} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="email" value={formik.values.email} type="email" placeholder="Enter email" />
                                        <InputFeedback message={errors?.field?.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="password" value={formik.values.password} type="password" placeholder="Password" />
                                        <InputFeedback message={errors?.field?.password} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="passwordConfirmation">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control onChange={inputChangeHandler} name="password_confirmation" value={formik.values.password_confirmation} type="password" placeholder="Password" />
                                        <InputFeedback message={errors?.field?.password_confirmation} />
                                    </Form.Group>

                                    <Button disabled={isLoading} variant="primary" type="submit" className="w-100 mt-2">
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
