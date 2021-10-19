import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import useServicesContext from '../../hooks/useServicesContext';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useServicesContext();
    const service = services?.find(service => service.id.toString() === id);
    return (
        <Row xs={1} md={2} className='service-details m-0'>
            <Col lg={6}>
            <img src={service?.img} alt="" className='mw-100' />
            </Col>
            <Col lg={6}>
            <h2>{service?.serviceName}</h2>
            <p>{service?.description}</p>
            <h5 className='fs-2'><FontAwesomeIcon icon={faDollarSign} className='me-2' />{service?.price}</h5>
            <h5><b>Time:</b> {service?.time} minutes</h5>
            <h5><b>Through:</b> {service?.through}</h5>
            <Button variant='warning' className='mt-2'>Book Appointment</Button>
            </Col>
        </Row>
    );
};

export default ServiceDetails;