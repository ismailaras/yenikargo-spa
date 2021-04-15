import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import TrackPackage from "../components/TrackPackage/TrackPackage";
import TrackPackageCustomerID from "../components/TrackPackage/TrackPackageViaCustomerID";
import Navi from "../Navi";

const TrackPackagePage = () => {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div className="trackpackage_page">
      <Navi />
      <Container>
        <h1>Bağlama izlə</h1>
        <div className="trackpackage_page_container">
          <div className="mb-2 trackpackage_page_container__buttons">
            <Button
              onClick={() => setIsToggle(true)}
              color="primary"
            >
              Bağlama ID ilə
            </Button>
            <Button onClick={() => setIsToggle(false)} color="primary">
              Müştəri ID ilə
            </Button>
          </div>
          {isToggle ? <TrackPackage /> : <TrackPackageCustomerID />}
        </div>
      </Container>
    </div>
  );
};

export default TrackPackagePage;
