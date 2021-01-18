import React, {useEffect} from 'react';
import DTable from "../../../toolbox/DTable";
import {connect} from "react-redux";
import {deleteExtraSelling, getAllExtraSelling, selectAllExtraSelling} from '../../../../redux/actions/extraSellingActions';
import {addToCart} from "../../../../redux/actions/cartActions";
import CreateOrUpdateExtraSelling from "./CreateOrUpdateExtraSelling";
import ModalButton from "../../../toolbox/ModalButton";
import {ExtraSellingDTableChild} from "./ExtraSellingDTableChild";
import {formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";


const cols = [
    {
        name: <h6>ID</h6>,
        selector: 'id',
        sortable: true
    },
    {
        name: <h6>Ad</h6>,
        selector: 'name',
        sortable: true
    },
    {
        name: <h6>Şəhər</h6>,
        selector: 'city',
        sortable: true
    },
    {
        name: <h6>Enlik</h6>,
        selector: 'latitude',
        sortable: true
    },
    {
        name: <h6>Uzunluq</h6>,
        selector: 'longitude',
        sortable: true
    },
    {
        name: <h6>Ünvan</h6>,
        selector: 'address',
        sortable: true
    },
    {
        name: <h6>Ünvan</h6>,
        selector: 'address',
        sortable: true
    },
    {
        name: <h6>Telefon nömrəsi</h6>,
        selector: 'phone_number',
        sortable: true
    },
    {
        name: <h6>Mobil nömrə</h6>,
        selector: 'mobile_number',
        sortable: true
    },
    {
        name: <h6>URL</h6>,
        selector: 'url',
        sortable: true,
        format: row => <a href={row.url} rel="noreferrer" target="_blank">URL</a>
    },
    {
        name: <h6>Son hərəkət</h6>,
        selector: 'data_state',
        sortable: true,
        format: row => getStateNameInAzerbaijani(row['data_state'])
    },
    {
        name: <h6>Tarix</h6>,
        selector: 'created_date',
        sortable: true,
        minWidth: '150px',
        format: row => formatDate(row['created_date'])
    }
]

const AllExtraSellingDTable = ({deleteExtraSelling, selectAllExtraSelling, extraSellings, selectedAllExtraSelling, getAllExtraSelling}) => {
    useEffect(() => {
        if (extraSellings.length === 0) {
            getAllExtraSelling();
        }
    });
    const handleChange = e => {
        selectAllExtraSelling(e.selectedRows);
    };
    const removeExtraSelling = () => {
        deleteExtraSelling(selectedAllExtraSelling.lastSelectedExtraSelling);
    }
    const buttons = [
        <ModalButton
            buttonLabel="Filial artır"
            header="Filial artır"
            key={1}
            size={'md'}
            disabled={selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 0}
            body={<CreateOrUpdateExtraSelling/>}
        />,
        <button
            onClick={() => removeExtraSelling()}
            key={2}
            className="btn btn-primary mx-2"
            disabled={
                selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 1}
        >
            Sil
        </button>,
        <ModalButton
            buttonLabel="Tənzimlə"
            header="Filial tənzimlə"
            key={3}
            size={'md'}
            disabled={selectedAllExtraSelling.allSelectedAllExtraSelling.length !== 1}
            body={<CreateOrUpdateExtraSelling/>}
        />
    ]
    return (
        <div>
            <DTable
                data={extraSellings}
                buttons={buttons}
                cols={cols}
                expandableRowsComponent={<ExtraSellingDTableChild/>}
                clearSelectedRows={selectedAllExtraSelling.toggledClearRows}
                handleChange={handleChange}
                title={'Filial'}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    extraSellings: state.getAllExtraSellingReducer,
    selectedAllExtraSelling: state.selectAllExtraSellingReducer
});

const mapDispatchToProps = {
    selectAllExtraSelling,
    deleteExtraSelling,
    addToCart,
    getAllExtraSelling
};

export default connect(mapStateToProps, mapDispatchToProps)(AllExtraSellingDTable);