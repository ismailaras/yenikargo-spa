import React, {useEffect, useState} from 'react';
import DTable from "../../../toolbox/DTable";
import {connect} from "react-redux";
import {deleteCourier, selectCouriers, findCouriersSuccess} from '../../../../redux/actions/courierActions';
import CreateOrUpdateCourier from "./CreateOrUpdateCourier";
import ModalButton from "../../../toolbox/ModalButton";
import {CourierDTableChild} from "./CourierDTableChild";
import {formatBool, formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

const cols = [
    {
        name: <h6>ID</h6>,
        selector: 'id',
        sortable: true
    },
    {
        name: <h6>Ad</h6>,
        selector: 'first_name',
        sortable: true
    },
    {
        name: <h6>Soyad</h6>,
        selector: 'last_name',
        sortable: true
    },
    {
        name: <h6>Nömrə</h6>,
        selector: 'mobile_number',
        sortable: true
    },
    {
        name: <h6>Məbləğ</h6>,
        selector: 'courier_cost',
        sortable: true
    },
    {
        name: <h6>Qapıdan təhvil</h6>,
        selector: 'pick_up',
        sortable: true,
        format: row => formatBool(row['pick_up'])
    },
    {
        name: <h6>Tarix</h6>,
        selector: 'created_date',
        sortable: true,
        minWidth: '150px',
        format: row => formatDate(row['created_date'])
    },
    {
        name: <h6>Son hərəkət</h6>,
        selector: 'data_state',
        sortable: true,
        format: row => getStateNameInAzerbaijani(row['data_state'])
    },
]

const CouriersDTable = ({deleteCourier, selectCouriers, couriers, selectedCouriers}) => {
    const [foundCouriers, setFoundCouriers] = useState(couriers);
    useEffect(() => {
        // use useDispatch hook to handle removing an entity
        setFoundCouriers(couriers)
    }, [couriers]);
    const handleChange = e => {
        selectCouriers(e.selectedRows);
    };
    const removeCourier = () => {
        deleteCourier(selectedCouriers.lastSelectedCourier);
        setFoundCouriers(couriers.filter(courier => selectedCouriers.lastSelectedCourier.id !== courier.id))
    }
    const buttons = [
        <ModalButton
            buttonLabel="Tənzimlə"
            header="Kuryer tənzimlə"
            buttonColor="success"
            key={1}
            size={'md'}
            disabled={selectedCouriers.allSelectedCouriers.length !== 1}
            body={<CreateOrUpdateCourier/>}
        />,
        <button
            onClick={() => removeCourier()}
            key={2}
            className="btn btn-danger ml-2"
            disabled={selectedCouriers.allSelectedCouriers.length !== 1}>
            Sil
        </button>

    ]
    return (
        <div>
            <DTable
                data={foundCouriers}
                cols={cols}
                buttons={buttons}
                expandableRowsComponent={<CourierDTableChild/>}
                clearSelectedRows={selectedCouriers.toggledClearRows}
                handleChange={handleChange}
                title={'Kuryer'}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    couriers: state.findCouriersReducer,
    selectedCouriers: state.selectCouriersReducer
});

const mapDispatchToProps = {
    selectCouriers,
    deleteCourier,
    findCouriersSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(CouriersDTable);