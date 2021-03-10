import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const Register = () => {

    return (
        <Container>

            <Row>

                <Col>

                </Col>

                <Col className='py-3'>
                    <h1> Welcome New User</h1>

                    <Form className='py-3'
                    >

                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter Name'
                                required
                                name="name"
                            //ref={register}
                            >
                            </Form.Control>
                        </Form.Group>

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

                        <button type='submit' className='_in_btn'>Register</button>

                    </Form>

                </Col>
            </Row>

        </Container>

    )
}

export default Register