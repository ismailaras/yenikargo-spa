import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import TrackPackage from "../components/TrackPackage/TrackPackage";
import TrackPackageCustomerID from "../components/TrackPackage/TrackPackageViaCustomerID";
import Navi from "../Navi";

const TrackPackagePage = () => {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div>
      <Navi />
      <Container>
        <h1>Bağlama izlə</h1>
        <div className="mb-2">
          <Button
            onClick={() => setIsToggle(true)}
            color="primary"
            className="mr-2"
          >
            Bağlama ID ilə
          </Button>
          <Button onClick={() => setIsToggle(false)} color="danger">
            Müştəri ID ilə
          </Button>
        </div>
        {isToggle ? <TrackPackage /> : <TrackPackageCustomerID/>}
      </Container>
    </div>
  );
};

export default TrackPackagePage;
