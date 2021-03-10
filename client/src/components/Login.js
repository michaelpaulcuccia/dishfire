import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions.js';
import { useForm } from "react-hook-form";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    //get state
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error } = userLogin;

    //react-hook-form
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        setEmail(data.email);
        setPassword(data.password);

        //DISPATCH LOGIN
        dispatch(login(email, password));


    }


    return (

        <Container>

            <Row>

                <Col>
                    Column 1 of 2
                    </Col>

                <Col>
                    <h1> Sign Into Your Account</h1>

                    {error && <h1>Error on login</h1>}
                    {loading && <h1>Loading...</h1>}

                    <Form className='py-3'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter Email'
                                required
                                name="email"
                                ref={register}
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
                                ref={register}
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
