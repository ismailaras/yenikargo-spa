import React, {useEffect, useState} from 'react';
import DTable from "../../../toolbox/DTable";
import {connect} from "react-redux";
import {
    deleteCourier,
    selectCouriers,
    setReceiverCourier,
    setSenderCourier
} from '../../../../redux/actions/courierActions';
import CreateOrUpdateCourier from "./CreateOrUpdateCourier";
import ModalButton from "../../../toolbox/ModalButton";
import {CourierDTableChild} from "./CourierDTableChild";
import {formatBool, formatDate, formatPercentage, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

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
        name: <h6>Ünvan</h6>,
        selector: 'address',
        sortable: true
    },
    {
        name: <h6>Bank adı</h6>,
        selector: 'bank_name',
        sortable: true
    },
    {
        name: <h6>Kart nömrəsi</h6>,
        selector: 'card_number',
        sortable: true
    },
    {
        name: <h6>Bitiş tarixi</h6>,
        selector: 'exp_date',
        sortable: true
    },
    {
        name: <h6>Partnyordur</h6>,
        selector: 'is_partner',
        sortable: true,
        format: row => formatBool(row['is_partner'])
    },
    {
        name: <h6>Güzəşt</h6>,
        selector: 'discount',
        sortable: true,
        format: row => formatPercentage(row['discount'])
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

const CouriersDTable = ({deleteCourier, selectCouriers, couriers, selectedCouriers, setSenderCourier, setReceiverCourier}) => {
    const [foundCouriers, setFoundCouriers] = useState(couriers);
    useEffect(() => {
        setFoundCouriers(couriers)
    }, [couriers]);
    const handleChange = e => {
        selectCouriers(e.selectedRows);
    };
    const setSender = () => {
        setSenderCourier(selectedCouriers.lastSelectedCourier);
    }
    const setReceiver = () => {
        setReceiverCourier(selectedCouriers.lastSelectedCourier);
    }
    const removeCourier = () => {
        deleteCourier(selectedCouriers.lastSelectedCourier);
        setFoundCouriers(couriers.filter(courier => selectedCouriers.lastSelectedCourier.id !== courier.id))
    }
    const buttons = [
        <ModalButton
            buttonLabel="Müştəri artır"
            header="Müştəri artır"
            key={1}
            size={'md'}
            disabled={selectedCouriers.allSelectedCouriers.length !== 0}
            body={<CreateOrUpdateCourier/>}
        />,
        <button
            onClick={() => setSender()}
            key={2}
            className="btn btn-primary mx-2"
            disabled={selectedCouriers.allSelectedCouriers.length !== 1}>
            Göndərən seç
        </button>,
        <button
            onClick={() => setReceiver()}
            key={3}
            className="btn btn-primary mr-2"
            disabled={selectedCouriers.allSelectedCouriers.length !== 1}>
            Alan seç
        </button>,
        <ModalButton
            buttonLabel="Tənzimlə"
            header="Müştəri tənzimlə"
            key={4}
            size={'md'}
            disabled={selectedCouriers.allSelectedCouriers.length !== 1}
            body={<CreateOrUpdateCourier/>}
        />,
        <button
            onClick={() => removeCourier()}
            key={5}
            className="btn btn-primary ml-2"
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
                title={'Müştəri'}
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
    setSenderCourier,
    setReceiverCourier,
    deleteCourier
};

export default connect(mapStateToProps, mapDispatchToProps)(CouriersDTable);