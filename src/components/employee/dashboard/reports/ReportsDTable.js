import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  selectPayments,
  findPaymentsSuccess,
} from "../../../../redux/actions/paymentActions";
import {
  formatDate,
  getStateNameInAzerbaijani,
} from "../../../../utilities/helpers";


const ReportsDTable = ({
  payments,
}) => {
  const [foundPayments, setFoundPayments] = useState(payments);
  useEffect(() => {
    // use useDispatch hook to handle removing an entity
    setFoundPayments(payments);
  }, [payments]);
  const buttons = [];
  return (
    <div>
      Hi
    </div>
  );
};

const mapStateToProps = (state) => ({
  payments: state.findPaymentsReducer,
  selectedPayments: state.selectPaymentsReducer,
});

const mapDispatchToProps = {
  selectPayments,
  findPaymentsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsDTable);
