import React from 'react';
// import fintechCompanyLogo from '../assets/images/fintech_company_logo.png'
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <Carousel> */}
        {/* Add carousel items here */}
      {/* </Carousel> */}

      <Carousel>
            <Carousel.Item interval={2000}>
              <Container>
                <div className="maindiv">
                  <Row>
                    <Col xs={12} md={6} style={{ marginTop: "36px" }}>
                      <div className="investtext">
                        <h1 className="landing_title">
                          Investments <br  /> for
                          the people, <br  /> by the
                          people
                        </h1>
                      </div>
                      <div>
                        <p className="landing_p">
                          With Arthmate Direct,
                          <br />
                          you can now help others realise their dreams
                          <br />
                          while earning handsome returns!
                        </p>
                      </div>

                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img
                          src={
                            "https://arthmate-p2p-public-assets.s3.ap-south-1.amazonaws.com/images/arthmate-direct/landing.svg"
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Carousel.Item>

            {/* second slide */}
            <Carousel.Item interval={2000}>
              <Container>
                <div className="maindiv">
                  <Row>
                    <Col xs={12} md={6} style={{ marginTop: "36px" }}>
                      <div className="investtext">
                        {/* <h1 className="landing_title">Inflation </h1>
                    <h1 className="landing_title">beating </h1>
                    <h1 className="landing_title">earnings</h1> */}
                        <h1 className="landing_title">
                          Inflation <br  /> beating{" "}
                          <br  /> earnings
                        </h1>
                      </div>
                      <div>
                        <p className="landing_p">
                          P2P lending provides you with the opportunity
                          <br />
                          to earn higher returns than traditional debt
                          instruments!
                          <br />
                          Give your money a chance to outperform and beat
                          inflation!
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img
                          src={
                            "https://arthmate-p2p-public-assets.s3.ap-south-1.amazonaws.com/images/arthmate-direct/landing.svg"
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Carousel.Item>

            {/* third slide */}

            <Carousel.Item interval={2000}>
              <Container>
                <div className="maindiv">
                  <Row>
                    <Col xs={12} md={6} style={{ marginTop: "36px" }}>
                      <div className="investtext">
                        {/* <h1 className="landing_title">You lend</h1>
                    <h1 className="landing_title"> only if </h1>
                    <h1 className="landing_title">we lend!</h1> */}
                        <h1 className="landing_title">
                          You lend only <br /> if we lend!
                        </h1>
                      </div>
                      <div>
                        <p className="landing_p">
                          Arthmate's NBFC funds each approved borrower.
                          <br />
                          For the first time, you will be able to lend to
                          borrowers
                          <br />
                          alongside an NBFC! Yes, we have you covered.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <img
                          src={
                            "https://arthmate-p2p-public-assets.s3.ap-south-1.amazonaws.com/images/arthmate-direct/landing.svg"
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Carousel.Item>
            </Carousel>
































            <div className="contact-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={{color:'white'}}>Contact Us</h2>
              <Form className="contact-form" style={{textAlign:"left"}}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button mt-3">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center text-light">
              <div style={{textAlign:'left'}}>
              <h3>Registered Office:</h3>
              <span className="address">Kolkata</span>
              <p>EM 03, Bengal Eco Intelligent Park, 11th Floor,</p>
              <p>Unit 11 D1&D2, Salt Lake, Kolkata 700091</p>

              <h3>Corporate Offices:</h3>
              <span className="address">Gurugram</span>
              <p>The Circle, 3rd Floor, Huda City Centre Metro station,</p>
              <p>Sector 29, Gurugram, Haryana 122002</p>

              <span className="address">Mumbai</span>
              <p>3rd Floor, South Side Annexe, Tower 2B,</p>
              <p>Redbricks offices, One World Center, Prabhadevi, Mumbai</p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default HomePage;
