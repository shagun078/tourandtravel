import React from "react";
import '../styles/about.css';
import { Container, Row, Col } from "reactstrap";

const About = ()=> {
    return (
        <section className="commonphoto">
            <Container>
                <Row>
                    <Col lg="12">
                    <h1>Travel with us</h1>
                    <div className="about__content">
                        At TravelWorld, we’re passionate about creating unforgettable travel experiences. Whether you're seeking adventure, relaxation, or cultural discovery, we offer personalized itineraries and carefully curated destinations to suit every traveler. With expert guidance, trusted partnerships, and a commitment to quality, we make your journey seamless, enriching, and truly memorable. Let us handle the planning while you focus on making memories that last a lifetime.
                    </div>
                    <h1>Let's <span className="highlight">TRAVEL</span></h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default About;
