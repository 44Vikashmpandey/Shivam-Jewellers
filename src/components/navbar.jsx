
import sjlogo from '/public/sj logo.jpg'



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppRouting from '../routers/routes';
import Footer from './footer';
import CategoryNav from '../pages/home/categoryNav';
import { Link, useLocation } from 'react-router-dom';

function NavScrollExample() {

  const location = useLocation()
  return (
    <>
    <div className='' style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#eee",
        color: "#fff",
        padding: "1rem",
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
      >
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={sjlogo}
              width="80"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Shivam Jewellers
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="/home"><Link to="home" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></Nav.Link>
            <Nav.Link href="/contactus"><Link to="contactus" style={{ textDecoration: "none", color: "inherit" }}>Contact Us</Link></Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            {/* <span>Shivam Jewellers</span> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {location.pathname != '/contactus' ? <CategoryNav/> : ''}
    </div>
    <div>
    {/* {location.pathname == '/' || location.pathname == '/home' ? <CategoryNav/> : ''} */}
    </div>
    <div className='m-2'>
      {/* <AppRouting/> */}
    </div>
    <div>
      {/* <Footer/> */}
    </div>
    </>
  );
}

export default NavScrollExample;