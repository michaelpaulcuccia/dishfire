import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Message from '../Message';
import JumboPrefer from './preferComponents/JumboPrefer';
import areaCodes from '../../areaCodes.json';

const HomePrefer = () => {

    //ensure a user is logged in
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    //set a phone number from form
    const [phoneNumber, setPhoneNumber] = useState('');

    //input errors
    const [lessThanTwelve, setLessThanTwelve] = useState(null);
    const [tripleFiveAreaCode, setTripleFiveAreaCode] = useState(null);
    const [tripleFivePrefix, setTripleFivePrefix] = useState(null);
    const [mustBeNumber, setMustBeNumber] = useState(null);
    const [dashes, setDashes] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();

        //convert phone number to a 12 item array
        const phoneArray = [...phoneNumber];

        //check for input errors
        if (phoneArray.length < 12) {
            setLessThanTwelve(true);
        } else if (parseInt(phoneArray[0]) === 5 && parseInt(phoneArray[1]) === 5 && parseInt(phoneArray[2]) === 5) {
            setTripleFiveAreaCode(true);
        } else if (parseInt(phoneArray[4]) === 5 && parseInt(phoneArray[5]) === 5 && parseInt(phoneArray[6]) === 5) {
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
            setMustBeNumber(true)
        } else if (phoneArray[3] !== '-' || phoneArray[7] !== '-') {
            setDashes(true);
        } else {

            //set area code
            let areaCode = phoneArray[0] + phoneArray[1] + phoneArray[2];
            //search areaCodes.json for a city that matches
            let city = areaCodes.find(item => item.areaCode === areaCode);
            console.log(city)
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
        </>
    )
}

export default HomePrefer
