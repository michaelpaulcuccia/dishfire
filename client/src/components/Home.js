import React from 'react';
import { Jumbotron, Container, Accordion, Card, Button } from 'react-bootstrap';
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
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header
                        style={{ backgroundColor: '#083A67' }}
                    >
                        <Accordion.Toggle as={Button} variant="link" eventKey="0"
                            style={{ color: 'white' }}
                        >
                            Scope of Surveillance
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Geolocation data of more than 76,000 text messages and other travel information</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Over 110,000 names, gathered from electronic business cards</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Over 800,000 financial transactions that are either gathered from text-to-text payments or from linking credit cards to phone users</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Details of 1.6 million border crossings based on the interception of network roaming alerts</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Over 5 million missed call alerts</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>About 200 million text messages from around the world</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header
                        style={{ backgroundColor: '#083A67' }}
                    >
                        <Accordion.Toggle as={Button} variant="link" eventKey="1"
                            style={{ color: 'white' }}
                        >
                            PREFER
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Our proprietary analytical tool</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Processes SMS messages to extract information including contacts from missed call alerts</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Location from roaming and travel alerts</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Financial information from bank alerts and payments</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Names from electronic business cards</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <br></br>
            <br></br>
        </>
    )
}

export default Home;
