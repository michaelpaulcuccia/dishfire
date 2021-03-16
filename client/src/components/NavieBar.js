import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavieBar = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <Navbar className="navie" variant='light' expand="lg">

            <LinkContainer to='/'>
                <Navbar.Brand as='button' className='nav_btn'>dishFire <i className="fas fa-fire"></i></Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">

                    <LinkContainer to='/'>
                        <Nav.Link as='button' className='nav_btn'>Home</Nav.Link>
                    </LinkContainer>

                    {!userInfo &&
                        <LinkContainer to='/login'>
                            <Nav.Link as='button' className='nav_btn'>Login</Nav.Link>
                        </LinkContainer>
                    }

                    {userInfo &&
                        <LinkContainer to='/prefer'>
                            <Nav.Link as='button' className='nav_btn'>Prefer</Nav.Link>
                        </LinkContainer>
                    }

                    <LinkContainer to='/register'>
                        <Nav.Link as='button' className='nav_btn'>Register</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/plans'>
                        <Nav.Link as='button' className='nav_btn'>Plans</Nav.Link>
                    </LinkContainer>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavieBar
