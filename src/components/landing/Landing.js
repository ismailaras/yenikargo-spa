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

import target_icon from "../../assets/illustrations/target-icon.png";
import warehouse_icon from "../../assets/illustrations/warehouse-icon.png";
import tariffs_icon from "../../assets/illustrations/tariffs-icon.png";

import "./style.scss";
import LinkButton from "../toolbox/LinkButton";
import ModalButton from "../toolbox/ModalButton";
import OrderCourier from "./components/OrderCourier/OrderCourier";
import Accordion from "../toolbox/Accordion";
import Calculator from "./components/Calculator/Calculator";

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
                buttonStyle={{ width: "100%" }}
                buttonColor="light"
                body={<OrderCourier />}
              />
              <ModalButton
                buttonLabel="Kalkulyator"
                header="Kalkulyator"
                clsName="mt-1"
                buttonStyle={{ width: "100%" }}
                buttonColor="light"
                body={<Calculator />}
              />
              {/* <a className="text-white text-center" href="/#stations">
                İş saatları
              </a> */}
              {/* <LinkButton
                buttonLabel="İş qrafiki"
                clsName="btn-light mt-1"
                color="black"
                url="/#stations"
              /> */}
            </Col>
            <Col className="text-white">
              <h1>YeniKargo</h1>
              <h3 style={{opacity:'0.8'}}>Ölkədaxili Sifarişlərin Sərfəli Çatdırılması</h3>
              <div className="py-1">
                <i className="fa fa-whatsapp" />
                <span className="ml-1">
                  Whatsapp'la sifariş:
                  <a
                    className="text-white"
                    style={{ fontSize: "16px" }}
                    href="tel:0703120981"
                  >
                    {" "}
                    070-312-09-81
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="howitworks" className="package_levels_container">
        <Row>
          <Col className="bg-white text-primary py-5">
            <img src={level_box} alt="icon" />
            <div>Təhlükəsiz daşınma</div>
          </Col>
          <Col className="bg-white text-primary py-5">
            <img src={level_gps} alt="icon" />
            <div>Paket izləmə</div>
          </Col>
          <Col className="bg-white text-primary py-5">
            <img src={level_truck} alt="icon" />
            <div>Sürətli çatdırılma</div>
          </Col>
          <Col className="bg-white text-primary py-5">
            <img src={level_courier} alt="icon" />
            <div>Qapıda ödəmə</div>
          </Col>
        </Row>
      </Container>

      <div id="missions" className="pb-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Missiyamız</h1>
            <img className="icon-md" src={target_icon} alt="target" />
          </div>
          <hr />
          <p className="h5">
            <i className="fa fa-check" /> AZƏRBAYCANDA İLK ÖLKƏ DAXİLİ KARGO
            OLARAQ BİZİM MİSSİYAMIZ ÜLKƏDƏ ONLAYN SATIŞLA MƏŞĞUL OLANLARLA,
            ONLAYN ALICILAR ARASINDA RAHAT BİR CATDIRILMA XİDMƏTİ YARATMAQDIR.
            SATICILAR CATDIRILMA UÇUN VAXT İTİRMƏ YERİNƏ YENİ SATIŞLAR EDİB
            TİCARƏT DÖVRİYYƏLƏRİNİ ARTIRMAQLA MƏŞĞUL OLSUNLAR.ALICILAR İSƏ
            ÖZLƏRİNƏ UYĞUN FİLİALI VƏ UYĞUN VAXTI SEÇMƏKLƏ BAĞLAMALARINI TƏHVİL
            ALA BİLSİNLƏR.
          </p>
          <p className="h5 my-4">
            <i className="fa fa-check" /> SATICI İLƏ ALICI ARASINDA VASİTƏCİLİK
            EDƏRƏK TƏRƏFLƏRDƏN BİRİNƏ BOŞ VAXT QAZANDIRMAQ DİGƏRİNƏ İSƏ ARTIQ
            PUL QAZANMAQ İMKANI YARATMAQ.
          </p>
          <p className="h5 text-justify">
            <i className="fa fa-check" /> ONLAYN SATIŞLA MƏŞĞUL OLANLARA BİR
            ŞƏHƏRDƏN QAZANC DEYİL BÜTÜN ÖLKƏDƏN QAZANC ETMƏK İMKANI YARATMAQDIR.
            ALICILAR İSƏ İSTƏDİYİ ŞƏHƏRDƏ YERLƏŞƏN ONLAYN MAĞAZADAN SİFARİŞ EDE
            BİLSİNLƏR VƏ QISA MÜDDƏTDƏ ÖZ ŞƏHƏRLƏRİNDƏ TƏHVİL ALA BİLSİNLƏR.
          </p>
        </Container>
      </div>
{/*
      <div id="tariffs" className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Tariflər</h1>
            <img className="icon-md" src={tariffs_icon} alt="target" />
          </div>
          <hr />
          <div className="tariffs_container">
            <div className="inside-tariffs">
              <h4>Ölkədaxili daşınma</h4>
              <hr/>
              <div>
                <div>0 azn ................. KG 0 - KG 1</div>
                <div>1 azn ................. KG 1 - KG 1</div>
                <div>3 azn ................. KG 3 - KG 1</div>
                <div>5 azn ................. KG 5 - KG 1</div>
                <div>0.50 azn ................. KG 10 - və sonrakı hər kiloqramı</div>
              </div>
            </div>
            <div className="inside-tariffs">
              <h4>Naxçıvana daşınma</h4>
              <hr/>
              <div>
                <div>2 azn ................. KG 0 - KG 1</div>
                <div>3 azn ................. KG 1 - KG 3</div>
                <div>1 azn ................. KG 3 - və sonrakı hər kiloqramı</div>
              </div>
            </div>
          </div>
        </Container>
      </div>*/}

      <div id="stations" className="bg-light py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Filiallar</h1>
            <img
              className="icon-md text-white"
              src={warehouse_icon}
              alt="target"
            />
          </div>
          <hr />
          <div className="mt-3 landing_stations_container">
            {stations.map((s) => {
              return (
                <div key={s.id}>
                  <div className="landing_station-box">
                    <h3>{s.name}</h3>
                    <div>Şəhər: {s.city}</div>
                    <div>Adres: {s.address}</div>
                    <div>İş saatı: {s.work_hours}</div>
                    <a className="text-dark" href={`tel:${s.phone_number}`}>
                      Tel: {s.phone_number}
                    </a>
                    <a className="btn btn-dark" href={s.url}>
                      Xəritədə bax
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      <div id="faq" className="py-4 bg-primary">
        <Container>
          <div className="d-flex justify-content-between align-items-center text-white pr-1">
            <h1>Çox soruşulan suallar</h1>
            <i className="fa fa-question" style={{ fontSize: "34px" }} />
          </div>
          <hr className="text-white" />
          <Accordion />
        </Container>
      </div>
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
