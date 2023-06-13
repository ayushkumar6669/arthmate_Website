import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutPage.css';
// import image1 from '../images/image1.jpg';
// import image2 from '../images/image2.jpg';


const AboutPage = () => {
  return (
    <div className="about-page">
      <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center my-5">About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <div>
            <h2>Our Vision</h2>
            <p>
              Arthmate is India's premier embedded fintech platform leveraging 
              technology to provide on-demand seamless deployment of credit across 
              fintechs, digital platforms and SME anchors. With our at-scale credit 
              exchange platform, we strive to transform digital lending through 
              proprietary tech and advanced analytics solutions.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
            alt="Team" 
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      {/* Add more sections with images and content */}
      <Row>
        <Col>
          <p className="text-center">
            <a href="https://www.arthmate.com/" target="_blank" className="btn btn-primary btn-lg mt-5">
              Learn More
            </a>
          </p>
        </Col>
      </Row>
    </Container>

    </div>
  );
};


export default AboutPage;
