import React, { useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Navi from "./Navi";
import { connect } from "react-redux";
import { getStations } from "../../redux/actions/stationActions";
import Footer from "./Footer";

import level_gps from "../../assets/illustrations/level-gps.png";
import level_courier from "../../assets/illustrations/level-courier.png";
import level_box from "../../assets/illustrations/level-box.png";
import level_truck from "../../assets/illustrations/level-truck.png";

import "./style.scss";
import LinkButton from "../toolbox/LinkButton";
import ModalButton from "../toolbox/ModalButton";
import OrderCourier from "./components/OrderCourier/OrderCourier";
import Accordion from "../toolbox/Accordion";

const Landing = ({ stations, getStations }) => {
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
  });
  return (
    <div className="landing">
      <Navi />
      <div id="home">
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col xs="3" className="home_buttons">
              <LinkButton
                buttonLabel="Bağlama izlə"
                clsName="btn-light mt-1"
                color="black"
                url="track-package"
              />
              <ModalButton
                buttonLabel="Kuryer sifariş et"
                header="Kuryer sifariş et"
                clsName="mt-1"
                buttonStyle={{width:'100%'}}
                buttonColor="light"
                body={<OrderCourier />}
              />
              <LinkButton
                buttonLabel="Kalkulyator"
                clsName="btn-light mt-1"
                color="black"
                url="track-package"
              />
              <LinkButton
                buttonLabel="İş qrafiki"
                clsName="btn-light mt-1"
                color="black"
                url="track-package"
              />
            </Col>
            <Col className="text-white">
              <h1>YeniKargo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quisquam non similique, aperiam iure veniam et quam, ullam earum
                culpa necessitatibus ab, placeat quae minima assumenda adipisci
                cupiditate consequatur repudiandae!
              </p>

              <div className="py-1">
                <i className="fa fa-whatsapp" />
                <span className="ml-1">
                  Whatsapp'la sifariş:
                  <a className="text-white" style={{ fontSize: "16px" }} href="tel:123-456-7890"> 123-456-7890</a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="package_levels_container">
        <Row>
          <Col className="bg-white text-primary py-5">
            <img src={level_box} alt="icon" />
            <div>Təhlükəsiz daşınma</div>
          </Col>
          <Col className="bg-white text-primary mx-3 py-5">
            <img src={level_gps} alt="icon" />
            <div>Paket izləmə</div>
          </Col>
          <Col className="bg-white text-primary mr-3 py-5">
            <img src={level_truck} alt="icon" />
            <div>Sürətli çatdırılma</div>
          </Col>
          <Col className="bg-white text-primary py-5">
            <img src={level_courier} alt="icon" />
            <div>Qapıda ödəmə</div>
          </Col>
        </Row>
      </Container>

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
      <div id="stations" className="bg-danger py-5" >
        <Container className="">
          <div>
            <div className="text-white">
              <h1>Filiallar</h1>
              <hr className="text-light" />
              <Row>
                {stations.map((s) => {
                  return (
                    <Col key={s.id}>
                      <div className="landing_station-box">
                        <h3>{s.name}</h3>
                        <div>Şəhər: {s.city}</div>
                        <div>Adres: {s.address}</div>
                        <a href={`tel:${s.phone_number}`}>Tel: {s.phone_number}</a>
                        <a className="btn btn-success" href={s.url}>Xəritədə bax</a>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Accordion/>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
});
const mapDispatchToProps = {
  getStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
