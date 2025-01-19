import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Mail, PhoneCall } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Shivam Jewellers offers a wide range of exquisite jewelry designs
              crafted with precision and passion. Visit us to explore timeless treasures.
            </p>
          </Col>

          {/* Quick Links Section */}
          

          {/* Contact Section */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Shivam Jewellers <br />
              Gandhi, Sikhapur market, Danupur road, Gopiganj, Bhadohi <br />
              <PhoneCall/> +91-7007694322, +91-9794958826 <br />
              <Mail/> shivamjwellerssj@gmail.com
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us On</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  <Facebook/> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/shivamjwellerssj/" target="_blank" className="text-white text-decoration-none">
                 <Instagram/> Instagram
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Shivam Jewellers. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
