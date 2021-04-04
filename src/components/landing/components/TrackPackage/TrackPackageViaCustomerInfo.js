import React, { useState } from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  getStatusNameInAzerbaijani,
  formatDate,
} from "../../../../utilities/helpers";

const TrackPackageViaCustomerInfo = ({ trackingPackages }) => {
  const [toggleTable, setToggleTable] = useState(null);

  return (
    <div className="mt-3">
      {trackingPackages.map((trackingPackage) => {
        return (
          <div key={trackingPackage.package_id}>
            <Alert color="success">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="alert-heading">
                  Paket - {trackingPackage.package_id}{" "}
                </h4>
                <p className="mb-0">
                  Paket statusu:{" "}
                  <span className="lead">
                    {getStatusNameInAzerbaijani(trackingPackage.current_state)}
                  </span>
                </p>
                <p className="mb-0">
                  Müştəri ID: {trackingPackage.customer_id}
                </p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">
                  Müştərinin rolu:{" "}
                  {trackingPackage.is_receiver ? "Alan" : "Göndərən"}
                </p>
                <p className="mb-0">
                  Hazırki lokasiya: {trackingPackage.current_location || "-"}
                </p>
              </div>
              <hr />

              <table className="table text-white table-bordered">
                <thead
                  onClick={(e) => console.log(e)}
                  class="thead-light"
                >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tarix</th>
                  </tr>
                </thead>
                {
                  trackingPackage.tracking_states
                    .map((item, index) => {
                      return (
                        <tr key={index}>
                          <td scope="row">{`>`}</td>
                          <td>{getStatusNameInAzerbaijani(item.state)}</td>
                          <td>{formatDate(item.created_date)}</td>
                        </tr>
                      );
                    })
                    .reverse()}
              </table>
            </Alert>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trackingPackages: state.trackPackageViaCustomerIDReducer,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPackageViaCustomerInfo);
