import React from 'react';
import ImageDisplay from './ImageDisplay';
//import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            Welcome to Home.js
            <ImageDisplay />
            {/* <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                            Copyright &copy; dishFire <i class="fas fa-fire"></i>
                        </Col>
                    </Row>
                </Container>
            </footer> */}
        </div>
    )
}

export default Home;
