import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"
function Header() {
    return (
        <div>
           <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to="/Home"><Navbar.Brand >Portfolio</Navbar.Brand></LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='navbarcollapse' id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to='Formation & Certification'><Nav.Link className="mx-5"><i className="fas fa-certificate"></i>Formation & Certifications</Nav.Link></LinkContainer>
                            <Nav.Link className="mx-5"><i className="fas fa-shopping-cart"></i>Skills</Nav.Link>
                            <Nav.Link className="mx-5"><i className="fas fa-construction"></i>Projects</Nav.Link>
                        
                            <Nav.Link className="mx-5"><i className="fas fa-user"></i>Login</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
               
            </Navbar>
        </header>
        </div>
    )
}

export default Header
