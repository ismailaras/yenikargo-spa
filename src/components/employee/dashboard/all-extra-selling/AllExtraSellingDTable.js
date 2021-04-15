import React, { useEffect } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deleteExtraSelling,
  getAllExtraSelling,
  selectExtraSelling,
} from "../../../../redux/actions/extraSellingActions";
import { addToCart } from "../../../../redux/actions/cartActions";
import CreateOrUpdateExtraSelling from "./CreateOrUpdateExtraSelling";
import ModalButton from "../../../toolbox/ModalButton";
import { ExtraSellingDTableChild } from "./ExtraSellingDTableChild";
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
    name: <h6>Qiymət</h6>,
    selector: "price",
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

const AllExtraSellingDTable = ({
  deleteExtraSelling,
  selectExtraSelling,
  allExtraSelling,
  selectedAllExtraSelling,
  getAllExtraSelling,
}) => {
  useEffect(() => {
    if (allExtraSelling.length === 0) {
      getAllExtraSelling();
    }
  });
  const handleChange = (e) => {
    selectExtraSelling(e.selectedRows);
  };
  const removeExtraSelling = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      deleteExtraSelling(selectedAllExtraSelling.lastSelectedExtraSelling);
    }
  };
  const buttons = [
    <ModalButton
      buttonLabel="Servis artır"
      header="Servis artır"
      key={1}
      size={"md"}
      disabled={selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 0}
      body={<CreateOrUpdateExtraSelling />}
    />,
    <button
      onClick={() => removeExtraSelling()}
      key={2}
      className="btn btn-danger mx-2"
      disabled={selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 1}
    >
      Sil
    </button>,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="Servis tənzimlə"
      buttonColor="success"
      key={3}
      size={"md"}
      disabled={selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 1}
      body={<CreateOrUpdateExtraSelling />}
    />,
  ];
  return (
    <div>
      <DTable
        data={allExtraSelling}
        buttons={buttons}
        cols={cols}
        expandableRowsComponent={<ExtraSellingDTableChild />}
        clearSelectedRows={selectedAllExtraSelling.toggledClearRows}
        handleChange={handleChange}
        title={"Servis"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  allExtraSelling: state.getAllExtraSellingReducer,
  selectedAllExtraSelling: state.selectAllExtraSellingReducer,
});

const mapDispatchToProps = {
  selectExtraSelling,
  deleteExtraSelling,
  addToCart,
  getAllExtraSelling,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllExtraSellingDTable);
