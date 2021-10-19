import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, description, iconImg } = service;
    const url = `/service/${id}`;
    return (
        <Col>
            <Card className='card mx-auto align-items-center pt-2'>
                <Card.Img variant="top" src={iconImg} className='rounded-circle border border-2 border-warning card-icon-img' />
                <Card.Body className='mt-2'>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <Link to={url} className='fw-bold'>Know More +</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;