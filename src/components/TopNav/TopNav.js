import React from 'react';
import logo from '../../logo.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './TopNav.css';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const TopNav = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();
    const handleLoginAndOutBtn = () => {
        if (user.email) {
            logOut();
        } else {
            history.push('/login');
        }
    }
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
                        <Nav.Link as={NavLink} to="/appointments">Appointments</Nav.Link>
                        <Nav.Link as={NavLink} to="/app">Get App</Nav.Link>
                    </Nav>
                    <Button variant="info" className='text-white px-2' onClick={handleLoginAndOutBtn}>
                        <FontAwesomeIcon icon={faUser} className='me-2' />
                        {
                            user.email ? `${user.displayName} | Logout` : 'Login'
                        }
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;