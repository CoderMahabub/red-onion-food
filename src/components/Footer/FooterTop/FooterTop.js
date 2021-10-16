import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import footerlogo from '../../../Images/logos/logo.png';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <div className="footer-top bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col><img className="img-fluid" src={footerlogo} alt="logo" /></Col>
                    <Col></Col>
                    <Col className="footer-links">
                        <NavLink to="/about">About Online Food</NavLink>
                        <NavLink to="/blog">Read Our Blog</NavLink>
                        <NavLink to="/register">SignUp To Deliver</NavLink>
                        <NavLink to="/restaurant">Add Your Restaurant</NavLink>
                    </Col>
                    <Col className="footer-links">
                        <NavLink to="/help">Get help</NavLink>
                        <NavLink to="/faqs">Read FAQs</NavLink>
                        <NavLink to="/cities">View all cities</NavLink>
                        <NavLink to="/nearme">Restaurant near me</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterTop;