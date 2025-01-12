
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
import { useLocation } from 'react-router-dom';

function NavScrollExample() {

  const location = useLocation()
  return (
    <>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
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
            {/* <span>{location.pathname}</span> */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
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
    {location.pathname == '/' || location.pathname == '/home' ? <CategoryNav/> : ''}
    </div>
    <div className='m-2'>
      <AppRouting/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default NavScrollExample;