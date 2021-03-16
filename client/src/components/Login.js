import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Message from './Message.js';
import { login } from '../actions/userActions.js';

const Login = ({ history, location }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        //ensure user isn't already logged in
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (event) => {
        event.preventDefault();
        //Dispatch Login
        dispatch(login(email, password));
    };

    return (

        <Container>

            <Row>

                <Col>
                    {/* empty column */}
                </Col>

                <Col className='py-3'>

                    <h1> Sign Into Your Account</h1>

                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Message variant='warning'>Loading...</Message>}

                    <Form className='py-3'
                        onSubmit={submitHandler}
                    >

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control as='input'
                                type="email"
                                placeholder='Enter Email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Enter Password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <button className='_in_btn' type='submit'>Sign In</button>

                    </Form>

                    <Row className='py-3'>
                        <Col>
                            Don't have an account? <Link to='/register'>Sign Up</Link>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>

    )
}

export default Login