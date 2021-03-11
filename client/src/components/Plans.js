import React from 'react';
import { Row, Col, ListGroup, Jumbotron, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Plans = () => {
    return (

        <>
            <div className='py-3'>
                <Jumbotron style={{ marginTop: '5px', backgroundColor: '#083A67', color: 'white' }}>
                    <Container>
                        <h1>dishFire <i class="fas fa-fire"></i></h1>
                        <h3>
                            Licensing & Pricing
                        </h3>
                        <small>Our Free Preview is distributed under the MIT License. It is free to use in your production environments.</small>
                    </Container>
                </Jumbotron>
            </div>

            <Row >
                <Col>
                    <ListGroup>
                        <ListGroup.Item className="text-center"><h4><strong>Free Preview</strong></h4></ListGroup.Item>
                        <ListGroup.Item>Limited Access to PREFER</ListGroup.Item>
                        <ListGroup.Item>Preview Results</ListGroup.Item>
                        <ListGroup.Item>No Credit Card Required</ListGroup.Item>
                    </ListGroup>
                    <div className='py-3'>
                        <LinkContainer to='/register'>
                            <button type='submit' className='_in_btn'>Sign Up for Free Preview</button>
                        </LinkContainer>
                    </div>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className="text-center"><h4><strong>Standard Package</strong></h4></ListGroup.Item>
                        <ListGroup.Item>Full Access to PREFER</ListGroup.Item>
                        <ListGroup.Item>Customizable Interface</ListGroup.Item>
                        <ListGroup.Item>Implementation Assistance</ListGroup.Item>
                        <ListGroup.Item>Full Access to Live Support</ListGroup.Item>
                    </ListGroup>
                    <div className='py-3'>
                        <LinkContainer to='/register'>
                            <button type='submit' className='_in_btn'>Register for Standard Package</button>
                        </LinkContainer>
                    </div>
                </Col>

                <Col>
                    <ListGroup>
                        <ListGroup.Item className="text-center"><h4><strong>Specialized</strong></h4></ListGroup.Item>
                        <ListGroup.Item>Tell us what you are interested in. <p>We offer consulting and custom development.</p></ListGroup.Item>
                    </ListGroup>
                    <div className='py-3'>
                        <LinkContainer to='/contactus'>
                            <button type='submit' className='_in_btn'>Contact Us for Specialized Development</button>
                        </LinkContainer>
                    </div>
                </Col>
            </Row>

        </>

    )
}

export default Plans
