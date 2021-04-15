import React, { useEffect, useState } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deleteCustomer,
  selectCustomers,
  setReceiverCustomer,
  setSenderCustomer,
} from "../../../../redux/actions/customerActions";
import CreateOrUpdateCustomer from "./CreateOrUpdateCustomer";
import * as notification from "../../../../utilities/notification";
import ModalButton from "../../../toolbox/ModalButton";
import { CustomerDTableChild } from "./CustomerDTableChild";
import {
  formatBool,
  formatDate,
  formatPercentage,
  getStateNameInAzerbaijani,
} from "../../../../utilities/helpers";

const cols = [
  {
    name: <h6>ID</h6>,
    selector: "id",
    sortable: true,
  },
  {
    name: <h6>Ad</h6>,
    selector: "first_name",
    sortable: true,
    minWidth: 200
  },
  {
    name: <h6>Soyad</h6>,
    selector: "last_name",
    sortable: true,
  },
  {
    name: <h6>Nömrə</h6>,
    selector: "mobile_number",
    sortable: true,
    minWidth: 150
  },
  {
    name: <h6>Ünvan</h6>,
    selector: "address",
    sortable: true,
  },
  {
    name: <h6>Filial</h6>,
    selector: "station.name",
    sortable: true,
  },
  {
    name: <h6>Bank adı</h6>,
    selector: "bank_name",
    sortable: true,
  },
  {
    name: <h6>Kart nömrəsi</h6>,
    selector: "card_number",
    sortable: true,
  },
  {
    name: <h6>Bitiş tarixi</h6>,
    selector: "exp_date",
    sortable: true,
  },
  {
    name: <h6>Partnyordur</h6>,
    selector: "is_partner",
    sortable: true,
    format: (row) => formatBool(row["is_partner"]),
  },
  {
    name: <h6>Güzəşt</h6>,
    selector: "discount",
    sortable: true,
    format: (row) => formatPercentage(row["discount"]),
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
];

const CustomersDTable = ({
  deleteCustomer,
  selectCustomers,
  customers,
  selectedCustomers,
  setSenderCustomer,
  setReceiverCustomer,
  currentUser,
  auth
}) => {
  const [foundCustomers, setFoundCustomers] = useState(customers);
  useEffect(() => {
    setFoundCustomers(customers);
  }, [customers]);
  const handleChange = (e) => {
    selectCustomers(e.selectedRows);
  };
  const setSender = () => {
    if (
      !currentUser.currentEmployee.is_superuser &&
      currentUser.currentEmployee.station_id !==
      selectedCustomers.lastSelectedCustomer.station_id
    ) {
      notification.warn(
        `Uğursuz əməliyyat: Göndərən müştəri filialı ilə eyni filialda olmalısınız. Hazırkı filialınız: ${selectedCustomers.lastSelectedCustomer.station.name}`
      );
    } else setSenderCustomer(selectedCustomers.lastSelectedCustomer);
  };
  const setReceiver = () => {
    setReceiverCustomer(selectedCustomers.lastSelectedCustomer);
  };
  const removeCustomer = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      deleteCustomer(selectedCustomers.lastSelectedCustomer);
      setFoundCustomers(
        customers.filter(
          (customer) =>
            selectedCustomers.lastSelectedCustomer.id !== customer.id
        )
      );
    } else {
      return null;
    }
  };
  const buttons = [
    <ModalButton
      buttonLabel="Müştəri artır"
      header="Müştəri artır"
      key={1}
      size={"md"}
      disabled={auth.currentEmployee.is_readonly_admin || selectedCustomers.allSelectedCustomers.length !== 0}
      body={<CreateOrUpdateCustomer />}
    />,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="Müştəri tənzimlə"
      buttonColor="success"
      clsName="ml-2"
      key={4}
      size={"md"}
      disabled={auth.currentEmployee.is_readonly_admin || selectedCustomers.allSelectedCustomers.length !== 1}
      body={<CreateOrUpdateCustomer />}
    />,
    <button
      onClick={() => removeCustomer()}
      key={5}
      className="btn btn-danger ml-2"
      disabled={auth.currentEmployee.is_readonly_admin || selectedCustomers.allSelectedCustomers.length !== 1}
    >
      Sil
    </button>,
    <button
      onClick={() => setSender()}
      key={2}
      className="btn btn-warning mx-2"
      disabled={auth.currentEmployee.is_readonly_admin || selectedCustomers.allSelectedCustomers.length !== 1}
    >
      Göndərən seç
    </button>,
    <button
      onClick={() => setReceiver()}
      key={3}
      className="btn btn-info mr-2"
      disabled={auth.currentEmployee.is_readonly_admin || selectedCustomers.allSelectedCustomers.length !== 1}
    >
      Alan seç
    </button>,
  ];
  return (
    <div>
      <DTable
        data={foundCustomers}
        cols={cols}
        buttons={buttons}
        expandableRowsComponent={<CustomerDTableChild />}
        clearSelectedRows={selectedCustomers.toggledClearRows}
        handleChange={handleChange}
        title={"Müştəri"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.findCustomersReducer,
  selectedCustomers: state.selectCustomersReducer,
  currentUser: state.authReducer,
  auth: state.authReducer
});

const mapDispatchToProps = {
  selectCustomers,
  setSenderCustomer,
  setReceiverCustomer,
  deleteCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersDTable);
