import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Appointment.css";

function NavigationBar() {
    return (
        <>
            <Navbar className="nav-bg" bg="light" expand="lg" variant="dark">
                <Navbar.Brand href="#home"><p style={{ color: "	#DC143C" }}>petShield</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="">
                            <Nav.Link ><p style={{ color: "#6F42AD" }}><b>View Appointment</b></p></Nav.Link>
                        </LinkContainer>
                        <Nav.Link><p style={{ color: "#A386CA" }}><b>Cancel Appointment</b></p></Nav.Link>
                        <Nav.Link><p style={{ color: "#A386CA" }}><b>Add Availability</b></p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr
                style={{
                    background: '#6F42AD',
                    color: '#6F42AD',
                    borderColor: '#6F42AD',
                    height: '1px',
                }}
            />
        </>
    );
}
export default NavigationBar;