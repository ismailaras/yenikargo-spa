import React from "react";
import { Container, Col, Row } from "reactstrap";
import Navi from "./Navi";
import landing_image from "../../assets/illustrations/shipping-landing.png";

const Landing = () => {
  return (
    <div>
      <Navi />
      <div className="bg-primary" style={{ height: "80vh" }}>
        <Container className="pt-5">
          <Row style={{alignItems:'center'}}>
            <Col className="text-white">
              <h1>YeniKargo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
            </Col>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={landing_image}
                alt="landing"
              />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
