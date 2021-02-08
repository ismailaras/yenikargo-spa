import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

const PackageStateInfo = ({ selectedPackages }) => {
  let packageInfo = selectedPackages.lastSelectedPackage;
  return (
    <div>
      <ListGroup type="unstyled">
        <h5>Package - {packageInfo.id}</h5>
        {packageInfo.tracking_states.map((p) => {
          return <ListGroupItem action key={p.created_date}>
            <h4>{p.state}</h4>
            <div>Creator:<b> #{p.creator_id}</b></div>
            <div>{p.comment}</div>
            <small>Date: {p.created_date}</small>
            </ListGroupItem>;
        })}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedPackages: state.selectPackagesReducer,
});

export default connect(mapStateToProps)(PackageStateInfo);
