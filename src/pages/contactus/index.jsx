import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { sendEmail } from "../../services/utilityService";
// import { sendEmail } from "../services/utilityService";


const Contactus = () => {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        description: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const name = `${formData.firstName} ${formData.lastName}`
		const email = `${formData.email}`
		const subject = `${formData.description}`
		const message = formData.phoneNumber
		sendEmail(name, email, subject, message).then(() => {
			formData.firstName = ''
            formData.lastName = ''
            formData.email = ''
            formData.phoneNumber = ''
            formData.description = ''
		})
        // console.log("Form Submitted", formData);
        // alert("Form Submitted Successfully!");
        // sendEmail()
      };


    return (
        <>
        {/* <div className="row">
            <div className=" col md-6">
            <h1 className="m-3 p-3 text-center">Welcome to shivam Jewellers we are here to provide the faison jewelleries currently we are only avilable on pysical store. What every product aur design you to want to buy please fill trhe details we will try to reach out you and upload the design whatever you want we will create the same design with our designing team. Thank you for your support.</h1>
            </div>
            <div className=" col md-6">
            <Container className="mt-5">
      <h1 className="text-center mb-4">Product Design Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe the product or design"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
            </div>
        </div> */}
        {/* <h1 className="m-3 p-3 text-center">Welcome to shivam Jewellers we are here to provide the faison jewelleries currently we are only avilable on pysical store. What every product aur design you to want to buy please fill trhe details we will try to reach out you and upload the design whatever you want we will create the same design with our designing team. Thank you for your support.</h1> */}
        <div className=""
        style={{
            height:'1000px',
            backgroundImage: "url('/public/sj logo.jpg')", // Replace with the path to your logo
            backgroundSize: "contain", // Ensures the logo fits properly
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#f5f5f5", // Optional: Add a light background color for contrast
          }}
        >
        {/* <Container style={{backgroundColor:""}}>
      <h1 className="">Product Design Form</h1>
      <Form onSubmit={handleSubmit} className="">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type=""
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe the product or design"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container> */}
   <Container
        className="p-5 rounded shadow"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <h1 className="text-center mb-4">Contact us for more details</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label className="text-start w-100">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label className="text-start w-100">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formPhoneNumber" className="mb-3">
            <Form.Label className="text-start w-100">Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="text-start w-100">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label className="text-start w-100">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Describe the product or design"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
        </div>
        </>
    )
}

export default Contactus