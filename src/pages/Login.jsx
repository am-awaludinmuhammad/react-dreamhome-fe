import React from 'react'
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
import { useLogin } from '../hooks/useLogin';
import InputFeedback from '../components/InputFeedback';

const Login = () => {
    const { login, isLoading, errors } = useLogin();
    
    const formData = {
        username: '',
        password: ''
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        formik.setFieldValue(name, value);
    }

    const formik = useFormik({
        initialValues: formData,
        onSubmit: async () => {
            await login(formik.values);
        }
    });
    
    return (
        <Layout>
            <Container>
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
                                <Card.Title className="text-center">Login to Your Account</Card.Title>
                                <hr />
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control value={formik.values.username} onChange={handleInputChange} name="username" type="text" placeholder="Username" />
                                        <InputFeedback message={errors?.field?.username}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={formik.values.password} onChange={handleInputChange} name="password" type="password" placeholder="Password" />
                                        <InputFeedback message={errors?.field?.password}/>
                                    </Form.Group>

                                    <Button disabled={isLoading} variant="primary" type="submit" className="w-100 mt-2">
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
