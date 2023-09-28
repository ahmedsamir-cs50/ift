import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Assests/IFT-Corporation-Egypt-16132-1617184983.png";
import './nav.css'
export const  Nav2=()=> {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="brandName mx-5" href="/">
        <img src={logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         
            <Nav.Link href="/">
            About
            </Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
            <Nav.Link href="#action2">Our Team</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

