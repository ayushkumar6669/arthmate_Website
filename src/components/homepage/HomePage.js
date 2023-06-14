import React from "react";
// import fintechCompanyLogo from '../assets/images/fintech_company_logo.png'
import { Carousel, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://media.istockphoto.com/id/1301914903/vector/fintech-financial-technology-concept-business-investment-banking-payment-vector-illustration.jpg?s=612x612&w=0&k=20&c=l63DM-wTGMIP-q3svKgYcodgYLyClLvkm09ec1JL1Cs="
            alt="Carousel Item 1"
          />
          <Carousel.Caption style={{ top: "200px" }}>
            <h2 className="carousel_data">Credit Cloud</h2>
            <p className="carousel_data">
              Loan origination and loan management systems
            </p>
            <p className="carousel_data">
              Microservices enabled plug-n-play API based lending stack
            </p>

            <p className="carousel_data">
              Enabling digital lending within a short time frame of 2 weeks
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://media.istockphoto.com/id/1087546786/vector/futuristic-raise-arrow-chart-digital-transformation-abstract-technology-background-big-data.jpg?s=612x612&w=0&k=20&c=3jlP-yssBM9eSv9jZytiU2TTT4CuTuJgBBg_EyKEaxo="
            alt="Carousel Item 2"
          />
          <Carousel.Caption style={{ top: "200px" }}>
            <h2 className="carousel_data">Credit Exchange</h2>
            <p className="carousel_data">P2P lending</p>
            <p className="carousel_data">Embedded loan sourcing</p>
            <p className="carousel_data">Comprehensive lending product suite</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image"
            src="https://media.istockphoto.com/id/966386222/vector/mining-blockchain-concept-illustration-digital-crypto-currency-abstract-background-fintech.jpg?s=612x612&w=0&k=20&c=epbMOhb1u7jwxwaboha0uzI2mw1wObm7Gj4OqsG0gdE="
            alt="Carousel Item 3"
          />
          <Carousel.Caption style={{ top: "200px" }}>
            <h2 className="carousel_data">Risk Engine</h2>
            <p className="carousel_data">Early warning system</p>
            <p className="carousel_data">Cross-sell/Up-sell engine</p>
            <p className="carousel_data">Analytics based risk scorecards</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{ backgroundColor: "#fff3cd" }} className="p-5 my-5">
        <Row className="d-flex justify-content-center p-3">
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <h1>ENABLING BHARAT THROUGH DIGITIZED LENDING</h1>
          </Col>
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UADeUyrZ0FUt_wnonvw0qcnyc3Jh9TESJQ&usqp=CAU"
              alt="fintech"
              style={{ width: "80%" }}
            />
          </Col>
        </Row>
      </Container>

      <div className="contact-section">
        <h2
          style={{ textAlign: "center", color: "whitesmoke" }}
          className="mb-5"
        >
          ARTHMATETECH PRIVATE LIMITED
        </h2>
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={{ color: "white" }}>Contact Us</h2>
              <Form className="contact-form" style={{ textAlign: "left" }}>
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
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button mt-3"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center text-light"
            >
              <div style={{ textAlign: "left" }}>
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
