import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Message from './Message';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [plan, setPlan] = useState('');
    const [planMessage, setPlanMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();

        //error message if plan isn't chosen
        if (plan === '') {
            setPlanMessage('You Must Select a Plan');

        } else {
            window.alert("Thank you for registering!")

        }

        console.log(name, email, password, plan)

    };

    return (
        <Container>

            {
                planMessage &&
                <>
                    <br></br>
                    <Message variant='danger'>You Must Select a Plan</Message>
                </>
            }

            <Row>

                <Col>
                    {/* empty column */}
                </Col>

                <Col className='py-3'>
                    <h1> Welcome New User</h1>

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

                        <Form.Group controlId='plantype'>
                            <Form.Label>Please Select a Plan</Form.Label>
                            <select name="Plans"
                                style={{ marginLeft: '9px' }}
                                required
                                onChange={(event) => setPlan(event.target.value)}
                            >
                                {/* <option disabled selected value='--select an option--'>--select an option--</option> */}
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