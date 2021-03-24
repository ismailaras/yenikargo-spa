import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { getStatusNameInAzerbaijani } from "../../../../utilities/helpers";

const TrackPackageInfo = ({ trackingPackage }) => {
  return (
    <div className="mt-3">
        <Alert color="success">
          <h4 className="alert-heading">Paket - {trackingPackage.package_id} </h4>
          <p className="mb-0">
            Müştəri ID: {trackingPackage.creator_id}
          </p>
          <p className="mb-0">
            Paket statusu: <span className="lead">{getStatusNameInAzerbaijani(trackingPackage.current_state)}</span>
          </p>
          <p className="mb-0">
            Hazırki lokasiya: {trackingPackage.current_location || '-'}
          </p>
        </Alert>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trackingPackage: state.trackPackageReducer,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPackageInfo);
