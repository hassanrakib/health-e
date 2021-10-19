import React from 'react';
import './GetApp.css';
import app from '../../images/app.jpg';
import playStore from '../../images/google-play-logo.png';
import appStore from '../../images/app-store-logo.png';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCalendar, faDownload, faVideo } from '@fortawesome/free-solid-svg-icons';

const GetApp = () => {
    return (
        <div className='app'>
            <Row className='m-0 justify-content-center p-2'>
                <Col xs={12} lg={7}>
                    <img src={app} alt="" className='mw-100' />
                </Col>
                <Col xs={12} lg={5} className='p-4'>
                    <h2>Meet Doctors Online Using Our App</h2>
                    <p className='mb-3'>This app have tons of features you won't believe. From chatting with doctors to video calling with them is in the feature of this app. Get closer to our doctors. Health-E just made it easier like never before. Get the app for your device now.</p>
                    <div className='d-flex flex-column justify-content-start align-items-center px-3'>
                        <div className='d-flex mb-2'>
                            <FontAwesomeIcon icon={faDownload} size='3x' className='text-secondary rounded me-3' />
                            <div>
                                <h4>Download App</h4>
                                <p>Our app is available in Android Play Store. And also in Apple App Store. Download from below.</p>
                            </div>
                        </div>
                        <div className='d-flex mb-2'>
                            <FontAwesomeIcon icon={faBoxOpen} size='3x' className='text-secondary rounded me-3' />
                            <div>
                                <h4>Pick Your Package</h4>
                                <p>Packages from minimal price to high price will give you access to different services. Get a package now.</p>
                            </div>
                        </div>
                        <div className='d-flex mb-2'>
                            <FontAwesomeIcon icon={faCalendar} size='3x' className='text-secondary rounded me-3' />
                            <div>
                                <h4>Set Appointment</h4>
                                <p>Doctors are available 24/7. Set appointment whenever you like. The flexibility is an advantage for our patients.</p>
                            </div>
                        </div>
                        <div className='d-flex mb-2'>
                            <FontAwesomeIcon icon={faVideo} size='3x' className='text-secondary rounded me-3' />
                            <div>
                                <h4>Talk to Doctor</h4>
                                <p>It's that easy. Talk to your doctor freely as like your friend. Do video call or chat through messaging.</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <div style={{cursor:'pointer'}}>
                            <img src={playStore} alt="" className='mw-100' width='180' />
                        </div>
                        <div style={{cursor:"pointer"}}>
                            <img src={appStore} alt="" className='mw-100' width='200' />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default GetApp;