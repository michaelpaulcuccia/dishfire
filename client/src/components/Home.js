import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import data_analytics from '../images/data_analytics.jpg'

const Home = () => {
    return (
        <>
            <div className='py-3'>
                <Jumbotron
                    style={{ backgroundImage: `url(${data_analytics})`, backgroundSize: 'cover', height: '50vh', color: 'white', }}

                >
                    <Container>
                        <h1>dishFire <i class="fas fa-fire"></i></h1>
                        <h3>
                            incorruptable solutions for corrupt enterprises
                        </h3>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <h3 className='home_colored_text'><strong>dishFire is a covert global surveillance collection system and database</strong></h3>
            </div>

            <br></br>
            <br></br>
        </>
    )
}

export default Home;
