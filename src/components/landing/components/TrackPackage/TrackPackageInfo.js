import React, { useState } from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  formatDate,
  getStatusNameInAzerbaijani,
} from "../../../../utilities/helpers";

const TrackPackageInfo = ({ trackingPackage }) => {
  const [toggleTable,setToggleTable] = useState(false)
  return (
    <div className="mt-3">
      <Alert color="success">
        <div className="d-flex justify-content-between align-items-center">
          <p>
            Paket - <span className="lead">{trackingPackage.package_id}</span>
          </p>
          <p>
            Paket statusu:{" "}
            <span className="lead">
              {getStatusNameInAzerbaijani(trackingPackage.current_state)}
            </span>
          </p>
          <p>Hazırki lokasiya: {trackingPackage.current_location || "-"}</p>
          <p>Müştəri ID: {trackingPackage.creator_id}</p>
        </div>

        <hr />

        <table className="table text-white table-bordered">
          <thead onClick={()=>setToggleTable(!toggleTable)} class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Tarix</th>
            </tr>
          </thead>
          <tbody>
          {toggleTable && trackingPackage.tracking_states
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td scope="row">
                    {`>`}
                  </td>
                  <td>{getStatusNameInAzerbaijani(item.state)}</td>
                  <td>{formatDate(item.created_date)}</td>
                </tr>
              );
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
