import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const Login = () => {

    return (

        <Container>

            <Row>

                <Col>

                </Col>

                <Col className='py-3'>
                    <h1> Sign Into Your Account</h1>
                    <Form className='py-3'
                    >
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control as='input'
                                className='form_entry_field'
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
                                className='form_entry_field'
                                type="password"
                                placeholder='Enter Password'
                                required
                                name="password"
                            //ref={register}
                            >
                            </Form.Control>
                        </Form.Group>

                        <button className='_in_btn' type='submit'>Sign In</button>

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