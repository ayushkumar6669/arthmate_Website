import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import './AboutPage.css';

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
                Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms, and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
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


        <div style={{backgroundColor:"#47abbb"}} className='px-5 mt-5 pb-5'>
        <Row>
          <Col>
            <h2 className="text-center mt-5">Testimonials</h2>
            <p className="text-center">WHAT OUR CLIENTS SAY ABOUT US</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={6} lg={12} className="mb-4">
            <Card className="testimonial-card flex-grow-1">
              <Card.Body>
                <Card.Title>Deepak Samuel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">TrueCredit</Card.Subtitle>
                <Card.Text>
                  We are happy and content to have found the right partner in Arthmate. We always look for partners for the long run, those who understand not just scalability, but also sustenance; of the people we are, people we serve and the product we create. This team (Arthmate) understands our DNA and believes in our vision. We appreciate Arthmate's team who continuously supported & assisted our team to meet the goal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={12} className="mb-4">
            <Card className="testimonial-card flex-grow-1">
              <Card.Body>
                <Card.Title>Vikas Singh</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">MD/CEO Sugmya Finance Private Limited</Card.Subtitle>
                <Card.Text>
                  Our vision at Sugmya Finance Pvt Ltd “to serve the customers as a true financial partner in their inclusive growth journey” has become a reality because of the strong support of Arthmate, one of our most trusted partners who has been a part of our growth and making it easier for us to serve the people.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        </div>
      


        <Row className='bottom_section'>
          <Col md={12} lg={6} className="help-support-section">
            <div>
            <h2 >Help & Support</h2>
            <div className="contact-info">
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>Phone: +91 7835009643</span>
              </div>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>Email: customercare@arthmate.com</span>
              </div>
            </div>
            </div>
          </Col>
        {/* </Row> */}
        {/* <Row className="follow-us-section"> */}
          <Col md={12} lg={6} className="follow-us-section">
            <div>
            <h2 >Follow Us On</h2>
            <div className="follow-us-icons">
              <a href="https://www.linkedin.com/company/arthmate/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="follow-us-icon" />
              </a>
            </div>
            </div>
          </Col>
          <p className="text-center">
              <a href="https://www.arthmate.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-5">
                Learn More
              </a>
            </p>
        </Row>

        {/* <Row>
          <Col>
            <p className="text-center">
              <a href="https://www.arthmate.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-5">
                Learn More
              </a>
            </p>
          </Col>
        </Row> */}


      </Container>
    </div>
  );
};

export default AboutPage;
