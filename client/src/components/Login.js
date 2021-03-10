import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {

    return (

        <Container>

            <Row>

                <Col>
                    Column 1 of 2
                    </Col>

                <Col>
                    <h1> Sign Into Your Account</h1>
                    <Form className='py-3'
                    >
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter Email'
                                required
                                name="email"
                            //ref={register}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Enter Password'
                                required
                                name="password"
                            //ref={register}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>Sign In</Button>

                    </Form>

                    <Row className='py-3'>
                        <Col>
                            Don't have an account? Sign Up
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>

    )
}

export default Login