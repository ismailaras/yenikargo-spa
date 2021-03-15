import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";

const TrackPackageViaCustomerInfo = ({ trackingPackages }) => {
  return <div className="mt-3">
    {trackingPackages.map((trackingPackage) => {
      return (
        <div key={trackingPackage.package_id}>
          <Alert color="success">
            <h4 className="alert-heading">
              Paket - {trackingPackage.package_id}{" "}
            </h4>
            <p className="mb-0">Müştəri ID: {trackingPackage.customer_id}</p>
            <p className="mb-0">
              Paket statusu:{" "}
              <span className="lead">{trackingPackage.current_state}</span>
            </p>
            <p className="mb-0">
              Müştərinin rolu: {trackingPackage.isReciever ? "Alan":"Göndərən"}
            </p>
            <p className="mb-0">
              Hazırki lokasiya: {trackingPackage.current_location || "-"}
            </p>
          </Alert>
        </div>
      );
    })}
  </div>;
};

const mapStateToProps = (state) => ({
  trackingPackages: state.trackPackageViaCustomerIDReducer,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPackageViaCustomerInfo);
