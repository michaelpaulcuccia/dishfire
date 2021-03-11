import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Message from './Message';

const Register = () => {

    //error message if plan isn't chosen
    const [message, setMessage] = useState(null);

    //react-hook-form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        console.log(data)

        //error message if plan isn't chosen
        if (data.freepreview === false && data.standardpackage === false) {
            setMessage('You Must Select a Plan');
            //clear form
            reset();
        } else {
            window.alert("Thank you for registering!")
            reset();
        }

    }

    return (
        <Container>

            {
                message &&
                <>
                    <br></br>
                    <Message variant='danger'>{message}</Message>
                </>
            }

            <Row>

                <Col>

                </Col>

                <Col className='py-3'>
                    <h1> Welcome New User</h1>

                    <Form className='py-3'
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter Name'
                                required
                                name="name"
                                ref={register}
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

                        <Form.Group controlId='plantype'>
                            <Form.Label>Please Select a Plan</Form.Label>
                            <Form.Check
                                type={'checkbox'}
                                id='freepreview'
                                name='freepreview'
                                label='Free Preview'
                                ref={register}
                            />
                            <Form.Check
                                type={'checkbox'}
                                id='standardpackage'
                                name='standardpackage'
                                label='Standard Package'
                                ref={register}
                            />
                        </Form.Group>

                        <button type='submit' className='_in_btn'>Register</button>

                    </Form>

                </Col>
            </Row>

        </Container>

    )
}

export default Register