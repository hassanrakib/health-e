import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <Row  xs={1} lg={2} className='top-banner justify-content-center align-items-center text-white mx-0'>
            <Col lg={7}>
                <h1>Get Health Services Online from 50+ Medical Experts</h1>
                <p>
                    Going to hospital and seeing doctor has not been so easy. Spcially COVID-19 made it dangerous as well. We Health-E making your life and health easy to manage. Certified medical doctors are eagerly waiting to give you the best possible health service.
                </p>
                <div>
                    <Link to='/home#services' className='me-2'><Button variant='warning'>Services</Button></Link>
                    <Link to='/home#contact'><Button variant='light'>Contact Us</Button></Link>
                </div>
            </Col>
            <Col lg={4}>
                <Form className='form rounded-3 p-3'>
                    <h4>Get Appointment</h4>
                    <Form.Group className="mb-2">
                        <Form.Control type="phone" placeholder="Your phone number" />
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Select>
                            <option>Choose medical specialist</option>
                            <option value="psychiatrist">Psychiatrist</option>
                            <option value="immunologist">Immunologist</option>
                            <option value="anesthesiologist">Anesthesiologist</option>
                            <option value="cardiologist">Cardiologist</option>
                            <option value="dermatologist">Dermatologist</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2} placeholder='Anything to say?' />
                    </Form.Group>
                    <Button variant='warning'>Send</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default TopBanner;