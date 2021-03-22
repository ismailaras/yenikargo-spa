import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  findReports,
} from "../../../../redux/actions/paymentActions";


const ReportsDTable = ({
  reports,
  findReports
}) => {
  
  
  // console.log(reports)
  return (
    <div>
      {/* <button onClick={()=>findReports('1005')}>Clik</button>
      {console.log(reports)} */}
      <div>Bağlama gəliri: {reports.package_payment}</div>
      <div>Əlavə satış gəliri: {reports.extra_selling}</div>
      <div>Cəmi: {reports.package_payment + reports.extra_selling}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reports: state.findReportsReducer,
});

const mapDispatchToProps = {
  findReports
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsDTable);
