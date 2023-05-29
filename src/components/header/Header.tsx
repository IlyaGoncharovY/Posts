import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../utils/path";
import {Container, Dropdown, Navbar} from "react-bootstrap";
import meLogo1 from "../../common/assects/meLogo.jpg"


export const Header = () => {
    return (
        <Navbar bg="dark" variant="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={meLogo1} alt="Logo" style={{width: "40px", borderRadius: "5px"}}/>
                    <span className="ms-2">
                        <div style={{color: "darkgoldenrod", fontWeight: "bold"}}>
                            Ilya
                        </div>
                        <div style={{color: "gold", fontWeight: "bold"}}>
                            address: @Khimki Gangway
                        </div>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Dropdown className="ms-auto">
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href={PATH.POST_PAGE}>
                                <NavLink to={PATH.POST_PAGE} className="nav-link">
                                    POST_PAGE
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item href={PATH.ABOUT_ME}>
                                <NavLink to={PATH.ABOUT_ME} className="nav-link">
                                    ABOUT_ME
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

