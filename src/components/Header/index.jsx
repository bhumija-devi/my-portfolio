import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import { Button } from 'react-bootstrap';


function Header() {
  
  return (
    <Navbar expand="lg" className="bg-body-#FFD4D0">
      <Container>
        <Navbar.Brand className='navbar-brand-lg' href="#home">Devi Mallela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-item nav-link-lg'>About</Nav.Link>
            <Nav.Link href="#home" className='nav-item nav-link-lg'>Services</Nav.Link>
            <Nav.Link href="#home" className='nav-item nav-link-lg'>Portfolio</Nav.Link>
            <Nav.Link href="#link" className='nav-item nav-link-lg'>
              <Button variant="dark">Contact Us</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;