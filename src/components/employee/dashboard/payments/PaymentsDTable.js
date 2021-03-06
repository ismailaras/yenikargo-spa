import React, { useEffect, useState } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  selectPayments,
  findPaymentsSuccess,
} from "../../../../redux/actions/paymentActions";
import { PaymentDTableChild } from "./PaymentDTableChild";
import {
  formatDate,
  getStateNameInAzerbaijani,
} from "../../../../utilities/helpers";
import {CSVLink} from "react-csv";

const cols = [
  {
    name: <h6>ID</h6>,
    selector: "id",
    sortable: true,
  },
  {
    name: <h6>Ödəniş metodu</h6>,
    selector: "method",
    sortable: true,
  },
  {
    name: <h6>Qiymət</h6>,
    selector: "amount",
    sortable: true,
  },
  {
    name: <h6>Məhsul</h6>,
    selector: "sort",
    sortable: true,
  },
  {
    name: <h6>İşçi adı</h6>,
    selector: "employee.first_name",
    sortable: true,
  },
  {
    name: <h6>İşçi Soyadı</h6>,
    selector: "employee.last_name",
    sortable: true,
  },
  {
    name: <h6>Tarix</h6>,
    selector: "created_date",
    sortable: true,
    minWidth: "150px",
    format: (row) => formatDate(row["created_date"]),
  },
  {
    name: <h6>Son hərəkət</h6>,
    selector: "data_state",
    sortable: true,
    format: (row) => getStateNameInAzerbaijani(row["data_state"]),
  },
  {
    name: <h6>Comment</h6>,
    selector: "comment",
    minWidth: "50%",
    sortable: true,
  },
];

const PaymentsDTable = ({
  selectPayments,
  payments,
  selectedPayments,
}) => {
  const [foundPayments, setFoundPayments] = useState(payments);
  useEffect(() => {
    // use useDispatch hook to handle removing an entity
    setFoundPayments(payments);
  }, [payments]);
  const handleChange = (e) => {
    selectPayments(e.selectedRows);
  };
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
  ];
  const info = []
  const data = payments.map(a=>{
    info.push({id:a.id,sort:a.sort,amount:a.amount,method:a.method,employee:a.employee.first_name+" "+a.employee.last_name,comment:a.comment,created_date:a.created_date})
  })
  console.log(info)
  console.log(data)
  const buttons = [
    <CSVLink
        data={info}
        className="btn btn-secondary"
        filename={"yenikargo-report.csv"}
    >
      Export
    </CSVLink>
  ];
  return (
    <div>
      <DTable
        data={foundPayments}
        cols={cols}
        buttons={buttons}
        selectableRows={false}
        expandableRowsComponent={<PaymentDTableChild />}
        handleChange={handleChange}
        title={"Ödənişlər"}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsDTable);
