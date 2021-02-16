import React, { useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Navi from "./Navi";
import landing_image from "../../assets/illustrations/shipping-landing.png";
import { connect } from "react-redux";
import { getStations } from "../../redux/actions/stationActions";
import styled from "styled-components";
import ModalButton from "../toolbox/ModalButton";
import OrderCourier from "./components/OrderCourier/OrderCourier";
import Footer from "./Footer";

const Landing = ({ stations, getStations }) => {
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
  });
  return (
    <div>
      <Navi />
      <div id="home" className="bg-primary" style={{ minHeight: "85vh" }}>
        <Container className="pt-5">
          <Row style={{ alignItems: "center" }}>
            <Col className="text-white">
              <h1>YeniKargo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quisquam non similique, aperiam iure veniam et quam, ullam earum
                culpa necessitatibus ab, placeat quae minima assumenda adipisci
                cupiditate consequatur repudiandae!
              </p>
              <ModalButton
                buttonLabel="Kuryer sifariş et"
                header="Kuryer sifarişi"
                buttonColor="light"
                key={1}
                size={"md"}
                // disabled={selectedCouriers.allSelectedCouriers.length !== 1}
                body={<OrderCourier />}
              />
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
        <Container style={{ minHeight: "100vh" }}>
          <h1>Haqqimizda</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam non similique, aperiam iure veniam et quam, ullam earum
            culpa necessitatibus ab, placeat quae minima assumenda adipisci
            cupiditate consequatur repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam non similique, aperiam iure veniam et quam, ullam earum
            culpa necessitatibus ab, placeat quae minima assumenda adipisci
            cupiditate consequatur repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam non similique, aperiam iure veniam et quam, ullam earum
            culpa necessitatibus ab, placeat quae minima assumenda adipisci
            cupiditate consequatur repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam non similique, aperiam iure veniam et quam, ullam earum
            culpa necessitatibus ab, placeat quae minima assumenda adipisci
            cupiditate consequatur repudiandae!
          </p>
        </Container>
      </div>
      <div id="prices" className="bg-info" style={{ height: "100vh" }}>
        <Container className="pt-5">
          <Row style={{ alignItems: "center" }}>
            <Col className="text-white">
              <h1>Qiymetler</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quisquam non similique, aperiam iure veniam et quam, ullam earum
                culpa necessitatibus ab, placeat quae minima assumenda adipisci
                cupiditate consequatur repudiandae!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="stations" className="bg-warning" style={{ minHeight: "100vh" }}>
        <Container className="pt-5">
          <div style={{ alignItems: "center" }}>
            <div className="text-white">
              <h1>Filiallar</h1>
              <hr className="text-danger" />
              <Row>
                {stations.map((s) => {
                  return (
                    <Col key={s.id}>
                      <InfoBox>
                        <h3>{s.city} filialı</h3>
                        <div>Adres: {s.address}</div>
                        <div>Tel: {s.phone_number}</div>
                        <a href={s.url}>Ətraflı</a>
                      </InfoBox>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

const InfoBox = styled.div`
  padding: 30px;
  color: "white";
  border: 1px solid #fafafa;
`;

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
});
const mapDispatchToProps = {
  getStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
