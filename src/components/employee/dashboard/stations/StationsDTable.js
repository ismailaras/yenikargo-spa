import React, { useEffect } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deleteStation,
  getStations,
  selectStations,
} from "../../../../redux/actions/stationActions";
import { addToCart } from "../../../../redux/actions/cartActions";
import CreateOrUpdateStation from "./CreateOrUpdateStation";
import ModalButton from "../../../toolbox/ModalButton";
import { StationDTableChild } from "./StationDTableChild";
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
    selector: "name",
    sortable: true,
  },
  {
    name: <h6>Şəhər</h6>,
    selector: "city",
    sortable: true,
  },
  {
    name: <h6>Enlik</h6>,
    selector: "latitude",
    sortable: true,
  },
  {
    name: <h6>Uzunluq</h6>,
    selector: "longitude",
    sortable: true,
  },
  {
    name: <h6>Ünvan</h6>,
    selector: "address",
    sortable: true,
  },
  {
    name: <h6>İş saatı</h6>,
    selector: "work_hours",
    sortable: true,
  },
  {
    name: <h6>Telefon nömrəsi</h6>,
    selector: "phone_number",
    sortable: true,
  },
  {
    name: <h6>Mobil nömrə</h6>,
    selector: "mobile_number",
    sortable: true,
  },
  {
    name: <h6>URL</h6>,
    selector: "url",
    sortable: true,
    format: (row) => (
      <a href={row.url} rel="noreferrer" target="_blank">
        URL
      </a>
    ),
  },
  {
    name: <h6>Son hərəkət</h6>,
    selector: "data_state",
    sortable: true,
    format: (row) => getStateNameInAzerbaijani(row["data_state"]),
  },
  {
    name: <h6>Tarix</h6>,
    selector: "created_date",
    sortable: true,
    minWidth: "150px",
    format: (row) => formatDate(row["created_date"]),
  },
];

const StationsDTable = ({
  deleteStation,
  selectStations,
  stations,
  selectedStations,
  getStations,
  auth
}) => {
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
  });
  const handleChange = (e) => {
    selectStations(e.selectedRows);
  };
  const removeStation = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      deleteStation(selectedStations.lastSelectedStation);
    }
  };
  const buttons = [
    <ModalButton
      buttonLabel="Filial artır"
      header="Filial artır"
      key={1}
      size={"md"}
      disabled={!auth.currentEmployee.is_superuser || selectedStations.allSelectedStations.length !== 0}
      body={<CreateOrUpdateStation />}
    />,
    <button
      onClick={() => removeStation()}
      key={2}
      className="btn btn-danger mx-2"
      disabled={!auth.currentEmployee.is_superuser || selectedStations.allSelectedStations.length !== 1}
    >
      Sil
    </button>,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="Filial tənzimlə"
      buttonColor="success"
      key={3}
      size={"md"}
      disabled={!auth.currentEmployee.is_superuser || selectedStations.allSelectedStations.length !== 1}
      body={<CreateOrUpdateStation />}
    />,
  ];
  return (
    <div>
      <DTable
        data={stations}
        buttons={buttons}
        cols={cols}
        expandableRowsComponent={<StationDTableChild />}
        clearSelectedRows={selectedStations.toggledClearRows}
        handleChange={handleChange}
        title={"Filial"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
  selectedStations: state.selectStationsReducer,
  auth: state.authReducer
});

const mapDispatchToProps = {
  selectStations,
  deleteStation,
  addToCart,
  getStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(StationsDTable);
