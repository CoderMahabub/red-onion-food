import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './FooterBottom.css';

const FooterBottom = () => {
    return (
        <div className="text-light bg-dark pb-2 pt-4">
            <Container border-to="primary">
                <Row>
                    <Col sm={4}>
                        <p className="footer-bottom">Copyright © 2021 || Red Onion Food</p>
                    </Col>
                    <Col sm={2}>

                    </Col>
                    <Col sm={2}>
                        <NavLink className="footer-bottom fw-bold d-flex" to="/privacy">Privacy Policy</NavLink>
                    </Col>
                    <Col sm={2}>
                        <NavLink className="footer-bottom fw-bold d-flex" to="/terms">Terms of Use</NavLink>
                    </Col>
                    <Col sm={2}>
                        <NavLink className="footer-bottom fw-bold d-flex" to="/pricing">Pricing</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterBottom;