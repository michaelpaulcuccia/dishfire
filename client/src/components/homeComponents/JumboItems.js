import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import data_analytics from '../../images/data_analytics.jpg';

const JumboItems = () => {
    return (
        <div className='py-3'>
            <Jumbotron
                style={{ backgroundImage: `url(${data_analytics})`, backgroundSize: 'cover', height: '50vh', color: 'white', }}

            >
                <Container>
                    <h1>dishFire <i className="fas fa-fire"></i></h1>
                    <h3>
                        incorruptable solutions for corrupt enterprises
                    </h3>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default JumboItems
