import React, {useEffect} from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  getStatusNameInAzerbaijani,
  formatDate,
} from "../../../../utilities/helpers";

const TrackPackageViaCustomerInfo = ({ trackingPackages }) => {
  useEffect(() => {
    console.log(trackingPackages)
  })
  return (
    <div className="mt-3">
      {trackingPackages.sort((a,b)=>b.package_id-a.package_id).map((trackingPackage) => {
        return (
          <div key={trackingPackage.package_id}>
            <Alert color="success">
              <div className="align-items-center">
                <h4 className="alert-heading">
                  Paket - {trackingPackage.package_id}{" "}
                </h4>
                <p className="mb-0">
                  Paket statusu:{" "}
                  <span className="lead">
                    {getStatusNameInAzerbaijani(trackingPackage.current_state)}
                  </span>
                </p>
                <div>
                <p>Göndərən: {trackingPackage.sender_customer_id} - {trackingPackage.sender_customer_name}</p>
          <p>Alan: {trackingPackage.receiver_customer_id} - {trackingPackage.receiver_customer_name} - {trackingPackage.receiver_customer_mobile_number} </p>   
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">
                  Müştərinin rolu:{" "}
                  {trackingPackage.is_receiver ? "Alan" : "Göndərən"}
                </p>
              </div>
              <hr />

              <table className="table text-white table-bordered">
                <thead
                  className="thead-light"
                >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Filial</th>
                    <th scope="col">Tarix</th>
                  </tr>
                </thead>
                <tbody>
                {
                  trackingPackage.tracking_states
                    .map((item, index) => {
                      return (
                        <tr key={index} style={{background: trackingPackage.current_state === item.state && "green"}}>
                          <td>#</td>
                          <td>{getStatusNameInAzerbaijani(item.state)}</td>
                          <td>{item.state === "Declared" ? trackingPackage.sender_station_name:item.state === "Arrived"?trackingPackage.receiver_station_name : null }</td>
                          <td>{formatDate(item.created_date)}</td>
                        </tr>
                      );
                    })
                    .reverse()}</tbody>
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
