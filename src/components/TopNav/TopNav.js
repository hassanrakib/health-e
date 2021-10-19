import React from 'react';
import logo from '../../logo.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './TopNav.css';
import useAuth from '../../hooks/useAuth';

const TopNav = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar variant="light" collapseOnSelect expand="lg" className='position-absolute w-100 nav-container'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Health-<span className='text-info fw-bold'>E</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/login">
                            <Button variant="info" className='text-white px-3'>
                                <FontAwesomeIcon icon={faUser} className='me-2' />
                                {
                                    user.email ? 'Logout' : 'Login'
                                }
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;