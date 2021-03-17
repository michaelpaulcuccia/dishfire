import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions.js';
import Message from './Message';

const Register = ({ history, location }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [plan, setPlan] = useState('');
    const [planMessage, setPlanMessage] = useState(null);

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        //ensure user isn't already logged in
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (event) => {
        event.preventDefault();

        //error message if plan isn't chosen
        if (plan === '') {
            setPlanMessage('You Must Select a Plan');

        } else {
            dispatch(register(name, email, password, plan));
        }
    };

    return (
        <Container>

            <Row>

                <Col>
                    {/* empty column */}
                </Col>

                <Col className='py-3'>
                    <h1> Welcome New User</h1>

                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Message variant='warning'>Loading...</Message>}

                    <Form className='py-3'
                        onSubmit={submitHandler}
                    >

                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder='Enter Name'
                                required
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
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

                        {
                            planMessage &&
                            <>
                                <br></br>
                                <Message variant='danger'>You Must Select a Plan</Message>
                            </>
                        }

                        <Form.Group controlId='plantype'>
                            <Form.Label>Please Select a Plan</Form.Label>
                            <select name="Plans"
                                style={{ marginLeft: '9px' }}
                                required
                                onChange={(event) => setPlan(event.target.value)}
                            >
                                <option defaultValue='--select an option--'>--select an option--</option>
                                <option value="freepreview">Free Preview</option>
                                <option value="standardpackage">Standard Package</option>
                            </select>
                        </Form.Group>

                        <button type='submit' className='_in_btn'>Register</button>

                    </Form>

                </Col>
            </Row>

        </Container>

    )
}

export default Register