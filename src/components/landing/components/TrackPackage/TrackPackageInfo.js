import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  formatDate,
  getStatusNameInAzerbaijani,
} from "../../../../utilities/helpers";

const TrackPackageInfo = ({ trackingPackage }) => {
  return (
    <div className="mt-3"  style={{textTransform: 'uppercase'}}>
      <Alert color="success">
        <div className=" align-items-center">
          <p>
            Paket - <span className="lead">{trackingPackage.package_id}</span>
          </p>
          <p>
            Paket statusu:{" "}
            <span className="lead">
              {getStatusNameInAzerbaijani(trackingPackage.current_state)}
            </span>
          </p>
          <p>Göndərən: {trackingPackage.sender_customer_id} - {trackingPackage.sender_customer_name}</p>
          <p>Alan: {trackingPackage.receiver_customer_id} - {trackingPackage.receiver_customer_name} - {trackingPackage.receiver_customer_mobile_number} </p>         
        </div>
        <hr />

        <table className="table text-white table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Filial</th>
              <th scope="col">Tarix</th>
            </tr>
          </thead>
          <tbody>
          {trackingPackage.tracking_states
            .map((item, index) => {
              return (
                <tr key={index} style={{background: trackingPackage.current_state === item.state && "green"}}>
                  <td>
                    {`>`}
                  </td>
                  <td>{getStatusNameInAzerbaijani(item.state)}</td>
                  <td>{item.state === "Declared" ? trackingPackage.sender_station_name:item.state === "Arrived"?trackingPackage.receiver_station_name : null }</td>
                  <td>{formatDate(item.created_date)}</td>
                </tr>
              )
            })
            .reverse()}
          </tbody>
        </table>
      </Alert>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trackingPackage: state.trackPackageReducer,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPackageInfo);
