import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavieBar = () => {

    return (
        <Navbar className="navie" variant='light' expand="lg">

            <LinkContainer to='/'>
                <Navbar.Brand as='button' className='nav_btn'>dishFire <i class="fas fa-fire"></i></Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">

                    <LinkContainer to='/'>
                        <Nav.Link as='button' className='nav_btn'>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/login'>
                        <Nav.Link as='button' className='nav_btn'>Login</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/register'>
                        <Nav.Link as='button' className='nav_btn'>Register</Nav.Link>
                    </LinkContainer>

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavieBar
