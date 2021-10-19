import './Services.css';
import React from 'react';
import useServicesContext from '../../hooks/useServicesContext';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const services = useServicesContext();
    return (
        <div id='services' className='py-5 d-flex flex-column justify-content-center align-items-center'>
            <div className='services-top text-center'>
                <h1>Our Health Services</h1>
                <p>We have been giving different types of health services that you might need. Categorized service makes the process easy for you and us.</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-2 text-center m-0">
                {
                    services?.map(service => <Service service={service} key={service.id} />)
                }
            </Row>
        </div>
    );
};

export default Services;