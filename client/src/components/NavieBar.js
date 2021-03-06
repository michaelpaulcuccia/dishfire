import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/userActions.js';

const NavieBar = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    let history = useHistory();

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/');
    }

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

                    {/* Show Username/Logout Or Show Login */}
                    {userInfo ? (
                        <NavDropdown as='button' className='nav_btn' title={userInfo.name} id="username">
                            <NavDropdown.Item className='nav_btn' onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) :
                        <LinkContainer to='/login'>
                            <Nav.Link as='button' className='nav_btn'>Login</Nav.Link>
                        </LinkContainer>
                    }

                    {/* Show/Hide Prefer Plan Type 1 of 2 */}
                    {userInfo && userInfo.plan === 'freepreview' &&
                        <LinkContainer to='/prefer'>
                            <Nav.Link as='button' className='nav_btn'>Preview Prefer</Nav.Link>
                        </LinkContainer>
                    }

                    {/* Show/Hide Prefer Plan Type 2 of 2 */}
                    {userInfo && userInfo.plan === 'standardpackage' &&
                        <LinkContainer to='/prefer'>
                            <Nav.Link as='button' className='nav_btn'>Standard Prefer</Nav.Link>
                        </LinkContainer>
                    }

                    {!userInfo &&
                        <LinkContainer to='/register'>
                            <Nav.Link as='button' className='nav_btn'>Register</Nav.Link>
                        </LinkContainer>
                    }

                    {!userInfo &&
                        <LinkContainer to='/plans'>
                            <Nav.Link as='button' className='nav_btn'>Plans</Nav.Link>
                        </LinkContainer>
                    }

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavieBar
