
// import sjlogo from '../../public/sj logo.jpg'



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import AppRouting from '../routers/routes';
// import Footer from './footer';

function CategoryNav() {
  return (
    <>
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container fluid>
      <Navbar.Brand>
           <Link to={`/${'All'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>All Jewellery </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* /:name/Products */}
            <Nav.Link href="#"><Link to={`/${'Gold'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Gold</Link></Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Silver'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Silver</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'EarRings'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>EarRings</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Rings'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Rings</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'1 Gm Gold'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>1 Gm Gold</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Wedding'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Wedding</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Gift'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Gift</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Imitation'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Imitation</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to={`/${'Fasion'}/Products`} style={{ textDecoration: "none", color: "inherit" }}>Fasion</Link> </Nav.Link>
            {/* <Nav.Link href="#">Contact Us</Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CategoryNav;