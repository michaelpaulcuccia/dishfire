import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Message from '../Message';
import JumboPrefer from './preferComponents/JumboPrefer';

const HomePrefer = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const [phoneNumber, setPhoneNumber] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(phoneNumber)
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
                        <Form.Label>Enter 9-Digit US Cellular Phone Number You Wish To Intercept</Form.Label>
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
