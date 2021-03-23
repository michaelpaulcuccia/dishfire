import React, { useState } from 'react';
import { Form, ListGroup, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Message from '../Message';
import JumboPrefer from './preferComponents/JumboPrefer';
import ContactCard from './preferComponents/ContactCard';
import areaCodes from '../../areaCodes.json';

const HomePrefer = () => {

    //ensure a user is logged in
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    //set a phone number - form
    const [phoneNumber, setPhoneNumber] = useState('');

    //input errors
    const [lessThanTwelve, setLessThanTwelve] = useState(null);
    const [tripleFiveAreaCode, setTripleFiveAreaCode] = useState(null);
    const [tripleFivePrefix, setTripleFivePrefix] = useState(null);
    const [mustBeNumber, setMustBeNumber] = useState(null);
    const [dashes, setDashes] = useState(null);

    //distance, city, state
    const [distance, setDistance] = useState(null);
    const [locationCity, setLocationCity] = useState(null);
    const [locationState, setLocationState] = useState(null);

    //create a random direction
    const getDirection = () => {
        let directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
        const min = 0;
        const max = 7;
        const pickANum = Math.floor(Math.random() * (max - min) + min);
        let chosen = directions[pickANum];
        return chosen;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        //convert phone number to a 12 item array
        const phoneArray = [...phoneNumber];

        //create a random distance with 2nd to last digit in number, x2
        setDistance(parseInt(phoneArray[9]) * 2);

        if (phoneArray.length < 12) {
            //input less than 12 characters
            setLessThanTwelve(true);
        } else if (parseInt(phoneArray[0]) === 5 && parseInt(phoneArray[1]) === 5 && parseInt(phoneArray[2]) === 5) {
            //area code 555
            setTripleFiveAreaCode(true);
        } else if (parseInt(phoneArray[4]) === 5 && parseInt(phoneArray[5]) === 5 && parseInt(phoneArray[6]) === 5) {
            //prefix 555
            setTripleFivePrefix(true);
        } else if (Number.isNaN(parseInt(phoneArray[0])) === true ||
            Number.isNaN(parseInt(phoneArray[0])) === true ||
            Number.isNaN(parseInt(phoneArray[1])) === true ||
            Number.isNaN(parseInt(phoneArray[2])) === true ||
            Number.isNaN(parseInt(phoneArray[4])) === true ||
            Number.isNaN(parseInt(phoneArray[5])) === true ||
            Number.isNaN(parseInt(phoneArray[6])) === true ||
            Number.isNaN(parseInt(phoneArray[8])) === true ||
            Number.isNaN(parseInt(phoneArray[9])) === true ||
            Number.isNaN(parseInt(phoneArray[10])) === true) {
            //something other than a number is entered
            setMustBeNumber(true)
        } else if (phoneArray[3] !== '-' || phoneArray[7] !== '-') {
            //dashes aren't entered
            setDashes(true);
        } else {

            //set area code
            let areaCode = phoneArray[0] + phoneArray[1] + phoneArray[2];

            //search areaCodes.json for a city/state that matches
            let obj = areaCodes.find(item => item.areaCode === areaCode);

            //conditions - city
            if (obj.city === '' || obj.city === null || obj.city === undefined) {
                setLocationCity('Not Available');
            } else {
                setLocationCity(obj.city);
            }

            //conditions - state
            if (obj.state === '' || obj.state === null || obj.state === undefined) {
                setLocationState('Not Available');
            } else {
                setLocationState(obj.state);
            }
        }

    }

    return (
        <>
            <JumboPrefer />
            {!userInfo &&
                <Message variant='danger'>You must be a registered user</Message>
            }

            {userInfo &&
                <Form
                    onSubmit={submitHandler}
                >
                    <Form.Group>
                        <h4>Enter 10-Digit US Cellular Phone Number You Wish To Intercept</h4>
                        <Form.Label>Please enter as 555-555-5555, including hyphens</Form.Label>
                        {lessThanTwelve &&
                            <Message variant='danger'>Improper Format of Number, must be 10-Digits with Hyphens</Message>
                        }
                        {tripleFiveAreaCode &&
                            <Message variant='danger'>(555) is not an area code</Message>
                        }
                        {tripleFivePrefix &&
                            <Message variant='danger'>(555) is not a prefix</Message>
                        }
                        {mustBeNumber &&
                            <Message variant='danger'>Must only contain numbers</Message>
                        }
                        {dashes &&
                            <Message variant='danger'>Must contain hyphens in proper location</Message>
                        }
                        <Form.Control
                            type="tel"
                            placeholder="###-###-####"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Unauthorized unlawful access to or unauthorized unlawful use of information or information systems is subject to criminal, civil, administrative, or other lawful action
                         </Form.Text>
                    </Form.Group>
                    <button className='_in_btn' type='submit'>By Clicking Submit, I hereby acknowledge the legal ramifications of conducting this intercept.</button>
                </Form>
            }

            {locationCity && locationState &&
                <>
                    <br></br>
                    <h3>Location</h3>
                    <ListGroup className='py=3'>
                        <Row>
                            <Col><ListGroup.Item><strong>Distance: </strong> {distance} miles</ListGroup.Item></Col>
                            <Col><ListGroup.Item><strong>Direction: </strong> {getDirection()}</ListGroup.Item></Col>
                            <Col><ListGroup.Item><strong>City: </strong> {locationCity}</ListGroup.Item></Col>
                            <Col><ListGroup.Item><strong>State: </strong> {locationState}</ListGroup.Item></Col>
                        </Row>
                    </ListGroup>
                    <small>direction and approximate distance from last cell tower ping</small>
                    <br></br>
                    <br></br>
                    <h3>Recent SMS Contacts</h3>
                    <ContactCard />
                </>
            }



        </>
    )
}

export default HomePrefer
