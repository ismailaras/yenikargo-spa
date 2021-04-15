import React from "react";
import { Container } from "reactstrap";
import Footer from "../Footer";
import Navi from "../Navi";

const Features = () => {
  return (
    <div id="features">
      <Navi />
      <Container className="my-5 text-center">
        <h3>Yeniliklər tezliklə</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default Features;
