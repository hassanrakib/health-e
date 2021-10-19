import './ManageAppointments.css';

import React, { useEffect, useState } from 'react';
import Appointment from '../Appointment/Appointment';
import { Row } from 'react-bootstrap';

const ManageAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('/appointments.json')
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, []);
    return (
        <div className='appointments'>
            <div className='appointments-header d-flex align-items-center justify-content-center text-white'>
                <h1>Your Appointments</h1>
            </div>
            <Row className='m-0 gy-5'>
            {
                appointments.map(appointment => <Appointment appointment={appointment} key={appointment.id} />)
            }
            </Row>
        </div>
    );
};

export default ManageAppointments;