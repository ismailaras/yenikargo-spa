import React, {useState, useEffect} from 'react';
import DTable from "../../../toolbox/DTable";
import {connect} from "react-redux";
import {
    deleteCustomer,
    selectCustomers,
    setReceiverCustomer,
    setSenderCustomer
} from '../../../../redux/actions/customerActions';
import CreateOrUpdateCustomer from "./CreateOrUpdateCustomer";
import ModalButton from "../../../toolbox/ModalButton";
import {CustomerDTableChild} from "./CustomerDTableChild";

const CustomersDTable = ({deleteCustomer, selectCustomers, customers, selectedCustomers, setSenderCustomer, setReceiverCustomer}) => {
    const [foundCustomers, setFoundCustomers] = useState(customers);
    useEffect(() => {
       setFoundCustomers(customers)
    }, [customers]);
    const handleChange = e => {
        selectCustomers(e.selectedRows);
    };
    const setSender = () => {
        setSenderCustomer(selectedCustomers.lastSelectedCustomer);
    }
    const setReceiver = () => {
        setReceiverCustomer(selectedCustomers.lastSelectedCustomer);
    }
    const removeCustomer = () => {
        deleteCustomer(selectedCustomers.lastSelectedCustomer);
        setFoundCustomers(customers.filter(customer => selectedCustomers.lastSelectedCustomer.id !== customer.id))
    }
    const buttons = [
        <ModalButton
            buttonLabel="Müştəri artır"
            header="Müştəri artır"
            key={1}
            size={'md'}
            disabled={selectedCustomers.allSelectedCustomers.length !== 0}
            body={<CreateOrUpdateCustomer/>}
        />,
        <button
            onClick={() => setSender()}
            key={2}
            className="btn btn-primary mx-2"
            disabled={selectedCustomers.allSelectedCustomers.length !== 1}>
            Göndərən seç
        </button>,
        <button
            onClick={() => setReceiver()}
            key={3}
            className="btn btn-primary mr-2"
            disabled={selectedCustomers.allSelectedCustomers.length !== 1}>
            Alan seç
        </button>,
        <ModalButton
            buttonLabel="Tənzimlə"
            header="Müştəri tənzimlə"
            key={4}
            size={'md'}
            disabled={selectedCustomers.allSelectedCustomers.length !== 1}
            body={<CreateOrUpdateCustomer/>}
        />,
        <button
            onClick={() => removeCustomer()}
            key={5}
            className="btn btn-primary ml-2"
            disabled={selectedCustomers.allSelectedCustomers.length !== 1}>
            Sil
        </button>
    ]
    return (
        <div>
            <DTable
                data={foundCustomers}
                buttons={buttons}
                expandableRowsComponent={<CustomerDTableChild/>}
                clearSelectedRows={selectedCustomers.toggledClearRows}
                handleChange={handleChange}
                title={'Müştəri'}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    customers: state.findCustomersReducer,
    selectedCustomers: state.selectCustomersReducer
});

const mapDispatchToProps = {
    selectCustomers,
    setSenderCustomer,
    setReceiverCustomer,
    deleteCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersDTable);