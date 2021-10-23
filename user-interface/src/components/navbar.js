import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import nlpGlossary from "../assets/icon.png";
export default class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className={"navbar"}>
                <Container>
                    <Navbar.Brand href="#home"><img src={nlpGlossary} className={'logo'} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <GitHubIcon />
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        );
    }
}