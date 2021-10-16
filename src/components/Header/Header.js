import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../Images/logos/logo2.png';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const { user, logOut } = useAuth();
    const cart = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img
                            src={logo}
                            width="150px"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/cart">{cart}</Nav.Link>
                            {user.displayName &&
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user.displayName}</a>
                                </Navbar.Text>
                            }
                            {user.displayName ? <button onClick={logOut} className="btn btn-light fw-bold ms-1">Sign Out</button>
                                : <>
                                    <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                                    <Nav.Link as={HashLink} to="/register">
                                        <button className="btn-danger rounded">SignUp</button>
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;