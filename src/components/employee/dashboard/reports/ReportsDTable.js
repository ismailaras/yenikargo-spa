import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  findReports,
} from "../../../../redux/actions/paymentActions";


const ReportsDTable = ({
  reports,
  findReports,
  auth
}) => {
  useEffect(()=>{
    function getOperatorReport(){
      if(auth.currentEmployee.is_operator_admin){
        findReports({employee_id:auth.currentEmployee.id})
      }
    }
    getOperatorReport()
  },[auth,findReports])
  return (
    <div className="reports_table">
      <div className="reports_table__items reports_table__items__package-price"><div> {reports.package_payment || '-'} azn</div> Bağlama gəliri </div>
      <div className="reports_table__items reports_table__items__extra-price"><div> {reports.extra_selling || '-'} azn</div> Əlavə satış gəliri </div>
      <div className="reports_table__items reports_table__items__total-price"><div> {reports.package_payment + reports.extra_selling || '-'} azn</div> Cəmi </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reports: state.findReportsReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = {
  findReports
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsDTable);
