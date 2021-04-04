import React from "react";
import { Container } from "reactstrap";
import Footer from "../Footer";
import Navi from "../Navi";

const Discounts = () => {
  return (
    <div id="vacations">
      <Navi />
      <Container className="my-5 text-center">
        <h3>Kampaniyalar tezliklə..</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default Discounts;
