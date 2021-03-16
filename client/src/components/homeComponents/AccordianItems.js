import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordianItems = () => {
    return (
        <Accordion
            defaultActiveKey="0"
        >
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
                    <Card.Body>Over 110,000 names gathered from electronic business cards</Card.Body>
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
            <Card>
                <Card.Header
                    style={{ backgroundColor: '#083A67' }}
                >
                    <Accordion.Toggle as={Button} variant="link" eventKey="1"
                        style={{ color: 'white' }}
                    >
                        In The Press
                        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <a
                            href='https://www.theguardian.com/world/2014/jan/16/nsa-collects-millions-text-messages-daily-untargeted-global-sweep'
                            target="_blank"
                            rel="noreferrer"
                            style={{ fontSize: '1.45' }}
                        >
                            The Guardian
                          </a></Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <a
                            href='https://www.newyorker.com/news/amy-davidson/dishfire-and-what-obama-couldnt-say-about-the-n-s-a'
                            target="_blank"
                            rel="noreferrer"
                            style={{ fontSize: '1.45' }}
                        >
                            The New Yorker
                          </a></Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <a
                            href='https://www.techspot.com/news/55362-nsa-dishfire-program-collects-millions-of-text-messages-daily.html'
                            target="_blank"
                            rel="noreferrer"
                            style={{ fontSize: '1.45' }}
                        >
                            Techspot
                          </a></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default AccordianItems
