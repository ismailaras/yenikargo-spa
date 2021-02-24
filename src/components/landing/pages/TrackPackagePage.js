import React from "react";
import { Container } from "reactstrap";
import TrackPackage from "../../employee/dashboard/packages/TrackPackage";
import Navi from "../Navi";

const TrackPackagePage = () => {
  return (
    <div>
      <Navi />
      <Container>
        <h1>Paketi izlə</h1>
        <TrackPackage />
      </Container>
    </div>
  );
};

export default TrackPackagePage;
