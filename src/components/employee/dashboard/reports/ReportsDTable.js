import React, {useEffect, useState} from "react";
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
  const [isYesterday, setIsYesterday] = useState(false)
  return (
      <div>
        <h5> Bugün </h5>
        <hr/>
        <div className="reports_table">
          <div className="reports_table__items reports_table__items__package-price"><div> {reports.package_payment} azn</div> Bağlama gəliri </div>
          <div className="reports_table__items reports_table__items__extra-price"><div> {reports.extra_selling} azn</div> Əlavə satış gəliri </div>
          <div className="reports_table__items reports_table__items__total-price"><div> {reports.package_payment + reports.extra_selling} azn</div> Cəmi </div>
        </div>

        <div>
          <div className="btn btn-outline-info mb-2" onClick={()=>setIsYesterday(!isYesterday)}>1 gün əvvəlki hesabata bax</div>
          <hr/>
          {isYesterday && <div className="reports_table bg-dark">
            <div className="reports_table__items reports_table__items__package-price">
              <div> {reports.package_payment_1_day_ago} azn</div>
              Bağlama gəliri
            </div>
            <div className="reports_table__items reports_table__items__extra-price">
              <div> {reports.extra_selling_1_day_ago} azn</div>
              Əlavə satış gəliri
            </div>
            <div className="reports_table__items reports_table__items__total-price">
              <div> {reports.package_payment_1_day_ago + reports.extra_selling_1_day_ago} azn</div>
              Cəmi
            </div>
          </div>}
        </div>

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
