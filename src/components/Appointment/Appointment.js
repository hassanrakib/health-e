import './Appointment.css';

import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Appointment = ({ appointment }) => {
    const { id, patientName, age, issue, description, doctor, time, date } = appointment;
    return (
        <Col xs={12} className='appointment'>
            <Card className='mw-100 border-1 shadow-sm border-light p-lg-2 mx-2'>
                <Card.Body className='mb-0'>
                    <Card.Title className='text-primary'>
                        #Appointment - {id}
                    </Card.Title>
                    <h5 className='bg-warning d-inline-block px-2'>Issue: {issue}</h5>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Patient:</b> {patientName}</ListGroupItem>
                    <ListGroupItem><b>Age:</b> {age}</ListGroupItem>
                    <ListGroupItem><b>Doctor Assigned:</b> {doctor}</ListGroupItem>
                    <ListGroupItem><b>Date:</b> {date}</ListGroupItem>
                    <ListGroupItem><b>Time:</b> {time}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default Appointment;