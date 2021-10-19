import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <Row  xs={1} lg={2} className='top-banner justify-content-center align-items-center text-white mx-0 pt-5'>
            <Col lg={7}>
                <h1>Get Health Services Online from 50+ Medical Experts</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cupiditate quidem vero laboriosam tempora odio qui facilis nostrum quae aliquam. Dolorum molestias, ratione optio harum odit recusandae nam unde facere?
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