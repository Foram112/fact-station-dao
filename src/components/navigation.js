import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png';

function navigation(){

return(

<Navbar>
<Container>
    <Navbar.Brand>
    <img href="http://localhost:3001/"style={{width:"300px"}} className="logo" src={Logo} alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <Nav className="me-auto">
        <Nav.Link href="http://localhost:3000/upload">Upload</Nav.Link>
            <Nav.Link href="http://localhost:3000/member">Become a Member</Nav.Link>
            <Nav.Link href="http://localhost:3000/req">Dashboard</Nav.Link>    
             
            <Nav.Link href="#link">Connect Wallet</Nav.Link>   
            </Nav>
        </Navbar.Text>
    </Navbar.Collapse>
</Container>
</Navbar>

);
}

export default navigation;



