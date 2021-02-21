import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";

const TrackPackageInfo = ({ trackingPackage }) => {
  return (
    <div>
        <Alert color="success">
          <h4 className="alert-heading">Paket tapıldı!</h4>
          <p className="mb-0">
            Müştəri id: {trackingPackage.creator_id}
          </p>
          <p className="mb-0">
            Paket statusu: {trackingPackage.current_state}
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
