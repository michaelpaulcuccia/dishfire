import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

const ContactCard = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const userRes = await res.json();
        setUsers(userRes);
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <Row>
            {users.map((user, index) => (
                <Col key={index} className="py-3">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{user.name}</ListGroup.Item>
                            <ListGroup.Item>{user.phone}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ContactCard
