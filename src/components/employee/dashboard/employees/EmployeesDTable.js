import React, { useEffect, useState } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deleteEmployee,
  selectEmployees,
} from "../../../../redux/actions/employeeActions";
import CreateOrUpdateEmployee from "./CreateOrUpdateEmployee";
import ModalButton from "../../../toolbox/ModalButton";
import { EmployeeDTableChild } from "./EmployeeDTableChild";
import {
  formatDate,
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
  },
  {
    name: <h6>Soyad</h6>,
    selector: "last_name",
    sortable: true,
  },
  {
    name: <h6>Filial</h6>,
    selector: "station.name",
    sortable: true,
  },
  {
    name: <h6>Rol</h6>,
    selector: 'employee_role',
    sortable: true,
  },
  {
    name: <h6>Ünvan</h6>,
    selector: "address",
    sortable: true,
  },
  {
    name: <h6>Mobil1</h6>,
    selector: "mobile1",
    sortable: true,
  },
  {
    name: <h6>Mobil2</h6>,
    selector: "mobile2",
    sortable: true,
  },
  {
    name: <h6>Fin</h6>,
    selector: "identity2",
    sortable: true,
  },
  {
    name: <h6>Doğum tarixi</h6>,
    selector: "birthdate",
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
];

const EmployeesDTable = ({
  deleteEmployee,
  selectEmployees,
  employees,
  selectedEmployees,
  auth
}) => {
  const [foundEmployees, setFoundEmployees] = useState(employees);
  useEffect(() => {
    setFoundEmployees(employees);
  }, [employees]);
  console.log(foundEmployees)

  const handleChange = (e) => {
    selectEmployees(e.selectedRows);
  };
  const removeEmployee = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
    deleteEmployee(selectedEmployees.lastSelectedEmployee);
    setFoundEmployees(
      employees.filter(
        (employee) => selectedEmployees.lastSelectedEmployee.id !== employee.id
      )
    );}
  };
  const buttons = [
    <ModalButton
      buttonLabel="İşçi artır"
      header="İşçi artır"
      key={1}
      size={"md"}
      disabled={selectedEmployees.allSelectedEmployees.length !== 0 || !auth.currentEmployee.is_superuser}
      body={<CreateOrUpdateEmployee />}
    />,
    <button
      onClick={() => removeEmployee()}
      key={2}
      className="btn btn-danger mx-2"
      disabled={selectedEmployees.allSelectedEmployees.length !== 1 || !auth.currentEmployee.is_superuser}
    >
      Sil
    </button>,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="İşçi tənzimlə"
      buttonColor="success"
      key={3}
      size={"md"}
      disabled={selectedEmployees.allSelectedEmployees.length !== 1 || !auth.currentEmployee.is_superuser}
      body={<CreateOrUpdateEmployee />}
    />,
  ];
  return (
    <div>
      <DTable
        data={foundEmployees}
        cols={cols}
        buttons={buttons}
        expandableRowsComponent={<EmployeeDTableChild />}
        clearSelectedRows={selectedEmployees.toggledClearRows}
        handleChange={handleChange}
        title={"İşçi"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.findEmployeesReducer,
  selectedEmployees: state.selectEmployeesReducer,
  auth:state.authReducer
});

const mapDispatchToProps = {
  selectEmployees,
  deleteEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesDTable);
