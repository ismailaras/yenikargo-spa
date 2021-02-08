import React from "react";
import { Container, Col, Row } from "reactstrap";
import Navi from "./Navi";
import landing_image from "../../assets/illustrations/shipping-landing.png";

const Landing = () => {
  return (
    <div>
      <Navi />
      <div id="home" className="bg-primary" style={{ height: "85vh" }}>
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
      <div id="about" className="py-2">
        <Container style={{ height: "100vh" }}>
              <h1>Haqqimizda</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
        </Container>
      </div>
      <div id="prices" className="bg-info" style={{ height: "100vh" }}>
        <Container className="pt-5">
          <Row style={{alignItems:'center'}}>
            <Col className="text-white">
              <h1>Qiymetler</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="stations" className="bg-warning" style={{ minHeight: "100vh" }}>
        <Container className="pt-5">
          <Row style={{alignItems:'center'}}>
            <Col className="text-white">
              <h1>Filiallar</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam non similique, aperiam iure veniam et quam, ullam earum culpa necessitatibus ab, placeat quae minima assumenda adipisci cupiditate consequatur repudiandae!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
