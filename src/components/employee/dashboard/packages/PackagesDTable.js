import React, { useEffect, useState } from "react";
import DTable from "../../../toolbox/DTable";
import { connect } from "react-redux";
import {
  deletePackage,
  selectPackages,
} from "../../../../redux/actions/packageActions";
import { addToCart } from "../../../../redux/actions/cartActions";
import CreateOrUpdatePackage from "./CreateOrUpdatePackage";
import ModalButton from "../../../toolbox/ModalButton";
import { PackageDTableChild } from "./PackageDTableChild";
import {
  formatBool,
  formatDate,
  formatPrice,
  getStateNameInAzerbaijani,
} from "../../../../utilities/helpers";
import PrintLabelButton from "./PrintLabelButton";
import { Routes } from "../../../../routes";
import { useHistory } from "react-router-dom";
import CreateOrUpdateCourier from "../couriers/CreateOrUpdateCourier";
import ChangePackageState from "./ChangePackageState";
import PackageStateInfo from "./PackageStateInfo";

const cols = [
  {
    name: <h6>ID</h6>,
    selector: "id",
    sortable: true,
  },
  {
    name: <h6>Göndərən müştəri</h6>,
    selector: "sender_customer_id",
    sortable: true,
  },
  {
    name: <h6>Alan müştəri</h6>,
    selector: "receiver_customer_id",
    sortable: true,
  },
  {
    name: <h6>Göndərən filial</h6>,
    selector: "sender_station.name",
    sortable: true,
  },
  {
    name: <h6>Alan filial</h6>,
    selector: "receiver_station.name",
    sortable: true,
  },
  {
    name: <h6>Hazırki filial</h6>,
    selector: "current_location",
    sortable: true,
  },
  {
    name: <h6>Kuryer ID</h6>,
    selector: "courier_id",
    sortable: true,
  },
  {
    name: <h6>Çəki (KQ)</h6>,
    selector: "weight",
    sortable: true,
  },
  {
    name: <h6>Daşınma haqqı</h6>,
    selector: "amount",
    sortable: true,
    format: (row) => formatPrice("AZN").format(row.amount),
  },
  {
    name: <h6>Əlavə dəyəri</h6>,
    selector: "extra_amount",
    sortable: true,
    format: (row) => formatPrice("AZN").format(row.extra_amount),
  },
  {
    name: <h6>Ədəd</h6>,
    selector: "quantity",
    sortable: true,
  },
  {
    name: <h6>Məhsul qiyməti</h6>,
    selector: "price",
    sortable: true,
    format: (row) => formatPrice("AZN").format(row.price),
  },
  {
    name: <h6>Kuryer haqqı</h6>,
    selector: "courier_cost",
    sortable: true,
    format: (row) => formatPrice("AZN").format(row.courier_cost),
  },
  {
    name: <h6>Ödənilib</h6>,
    selector: "is_paid",
    sortable: true,
    format: (row) => formatBool(row["is_paid"]),
  },
  {
    name: <h6>Məhsul ödənilib</h6>,
    selector: "is_product_paid",
    sortable: true,
    format: (row) => formatBool(row["is_product_paid"]),
  },
  {
    name: <h6>Kuryer haqqı ödənilib</h6>,
    selector: "is_courier_cost_paid",
    sortable: true,
    format: (row) => formatBool(row["is_courier_cost_paid"]),
  },
  {
    name: <h6>Alan ödəməli məhsul</h6>,
    selector: "is_postpaid",
    sortable: true,
    format: (row) => formatBool(row["is_postpaid"]),
  },
  {
    name: <h6>Qarşı ödəməli</h6>,
    selector: "will_receiver_pay",
    sortable: true,
    format: (row) => formatBool(row["will_receiver_pay"]),
  },
  {
    name: <h6>Ödəniş metodu</h6>,
    selector: "payment_method",
    sortable: true,
  },
  {
    name: <h6>Bağlama tərkibi</h6>,
    selector: "description",
    sortable: true,
  },
  {
    name: <h6>Əlavə məlumat</h6>,
    selector: "comment",
    sortable: true,
  },
  {
    name: <h6>Son izləmə</h6>,
    selector: "tracking_state",
    sortable: true,
    format: (row) => getStateNameInAzerbaijani(row["tracking_state"]),
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

const PackagesDTable = ({
  deletePackage,
  selectPackages,
  packages,
  selectedPackages,
  addToCart,
}) => {
  const [foundPackages, setFoundPackages] = useState(packages);
  useEffect(() => {
    setFoundPackages(packages);
  }, [packages]);
  const history = useHistory();
  const handleChange = (e) => {
    selectPackages(e.selectedRows);
  };
  const removePackage = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      deletePackage(selectedPackages.lastSelectedPackage);
      setFoundPackages(
        packages.filter((p) => selectedPackages.lastSelectedPackage.id !== p.id)
      );
    }
  };
  const addToCartAndRedirect = () => {
    selectedPackages.allSelectedPackages.forEach((p) => {
      if (p.tracking_state !== "Delivered") {
        addToCart({
          ...p,
          paymentFor: "Package",
        });
      }
    });
    history.push(Routes.checkout);
  };
  const buttons = [
    <button
      onClick={() => removePackage()}
      key={1}
      className="btn btn-danger"
      disabled={
        selectedPackages.allSelectedPackages.length !== 1 ||
        selectedPackages.lastSelectedPackage.tracking_state !== "Declared"
      }
    >
      Sil
    </button>,
    <ModalButton
      buttonLabel="Tənzimlə"
      header="Bağlama tənzimlə"
      key={2}
      clsName="mx-2"
      buttonColor="success"
      size={"md"}
      disabled={
        selectedPackages.allSelectedPackages.length !== 1 ||
        selectedPackages.lastSelectedPackage.tracking_state !== "Declared"
      }
      body={<CreateOrUpdatePackage />}
    />,
    <ModalButton
      buttonLabel="Status dəyiş"
      header="Status dəyiş"
      key={3}
      size={"md"}
      buttonColor="warning"
      disabled={selectedPackages.allSelectedPackages.length === 0}
      body={<ChangePackageState />}
    />,
    <ModalButton
      buttonLabel="Kuryer artır"
      header="Kuryer artır"
      key={4}
      clsName="ml-2"
      buttonColor="info"
      size={"md"}
      disabled={selectedPackages.allSelectedPackages.length === 0}
      body={<CreateOrUpdateCourier />}
    />,
    <button
      onClick={() => addToCartAndRedirect()}
      key={5}
      className="btn btn-primary mx-2"
      disabled={selectedPackages.allSelectedPackages.length === 0}
    >
      Ödəniş al
    </button>,

    <ModalButton
      buttonLabel="State Info"
      header="State Info"
      buttonColor="light"
      key={6}
      size={"md"}
      clsName="mr-2"
      disabled={
        selectedPackages.allSelectedPackages.length === 0 ||
        selectedPackages.lastSelectedPackage.tracking_state === ""
      }
      body={<PackageStateInfo />}
    />,
    <PrintLabelButton
      key={7}
      disabled={selectedPackages.allSelectedPackages.length !== 1}
      cls="btn btn-secondary"
      pckg={selectedPackages.lastSelectedPackage}
    />,
  ];
  return (
    <div>
      <DTable
        data={foundPackages}
        buttons={buttons}
        cols={cols}
        expandableRowsComponent={<PackageDTableChild />}
        clearSelectedRows={selectedPackages.toggledClearRows}
        handleChange={handleChange}
        title={"Bağlama"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  packages: state.findPackagesReducer,
  selectedPackages: state.selectPackagesReducer,
});

const mapDispatchToProps = {
  selectPackages,
  deletePackage,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PackagesDTable);
