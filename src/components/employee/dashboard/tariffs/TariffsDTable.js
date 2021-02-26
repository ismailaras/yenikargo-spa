import React, { useEffect } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deleteTariff,
  getTariffs,
  selectTariffs,
} from "../../../../redux/actions/tariffActions";
import { addToCart } from "../../../../redux/actions/cartActions";
import CreateOrUpdateTariff from "./CreateOrUpdateTariff";
import ModalButton from "../../../toolbox/ModalButton";
import { TariffDTableChild } from "./TariffDTableChild";
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
    name: <h6>Qiymət</h6>,
    selector: "price",
    sortable: true,
  },
  {
    name: <h6>MIN</h6>,
    selector: "from_kg",
    sortable: true,
  },
  {
    name: <h6>MAX</h6>,
    selector: "to_kg",
    sortable: true,
  },
  {
    name: <h6>Göndərən filial</h6>,
    selector: "sender_station_id",
    sortable: true,
  },
  {
    name: <h6>Alan filial</h6>,
    selector: "receiver_station_id",
    sortable: true,
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

const TariffsDTable = ({
  deleteTariff,
  selectTariffs,
  tariffs,
  selectedTariffs,
  getTariffs,
}) => {
  useEffect(() => {
    if (tariffs.length === 0) {
      getTariffs();
    }
  });
  const handleChange = (e) => {
    selectTariffs(e.selectedRows);
  };
  const removeTariff = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      deleteTariff(selectedTariffs.lastSelectedTariff);
    }
  };
  const buttons = [
    <ModalButton
      buttonLabel="Tarif artır"
      header="Tarif artır"
      key={1}
      size={"md"}
      disabled={selectedTariffs.allSelectedTariffs.length !== 0}
      body={<CreateOrUpdateTariff />}
    />,
    <button
      onClick={() => removeTariff()}
      key={2}
      className="btn btn-danger mx-2"
      disabled={selectedTariffs.allSelectedTariffs.length !== 1}
    >
      Sil
    </button>,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="Tarif tənzimlə"
      buttonColor="success"
      key={3}
      size={"md"}
      disabled={selectedTariffs.allSelectedTariffs.length !== 1}
      body={<CreateOrUpdateTariff />}
    />,
  ];
  return (
    <div>
      <DTable
        data={tariffs}
        buttons={buttons}
        cols={cols}
        expandableRowsComponent={<TariffDTableChild />}
        clearSelectedRows={selectedTariffs.toggledClearRows}
        handleChange={handleChange}
        title={"Tarif"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tariffs: state.getTariffsReducer,
  selectedTariffs: state.selectTariffsReducer,
});

const mapDispatchToProps = {
  selectTariffs,
  deleteTariff,
  addToCart,
  getTariffs,
};

export default connect(mapStateToProps, mapDispatchToProps)(TariffsDTable);
