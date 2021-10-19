import React from 'react';
import { Col, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../../logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Row xs={1} md={2} lg={3} className='gx-4 gy-3 p-4 bg-dark text-white m-0'>
            <Col lg={5}>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="" />
                    <h4 className='ms-2'>Health-<span className='text-info fw-bold'>E</span></h4>
                </div>
                <p className='mt-2'>
                    If you need expert medical advice, you are welcome to contact us at Health-E any time. Our lines are open 24/7.
                </p>
                <h5>
                    +880199459599
                </h5>
                <p>Email Us: info@health-e.com</p>
            </Col>
            <Col lg={4}>
                <div>
                    <h4>Follow Us on:</h4>
                    <a href="https://facebook.com" className='me-3'><FontAwesomeIcon icon={faFacebookSquare} size='2x' className='text-white' /></a>
                    <a href="https://twitter.com" className='me-3'><FontAwesomeIcon icon={faTwitterSquare} size='2x' className='text-white' /></a>
                    <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size='2x' className='text-white' /></a>
                </div>
                <div className='mt-4'>
                    <h4>Subscribe to Our NewsLetter:</h4>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="email@example.com"
                        />
                        <Button variant="outline-light" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </Col>
            <Col lg={3}>
            <h4>Useful Links:</h4>
            <Link to='/home#services' className='d-block text-white'>Services</Link>
            <Link to='/login' className='d-block text-white'>Login</Link>
            <Link to='/about' className='d-block text-white'>About Us</Link>
            </Col>
        </Row>
    );
};

export default Footer;