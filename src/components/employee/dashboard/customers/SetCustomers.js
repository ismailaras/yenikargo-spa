import {connect} from "react-redux";
import {notEmpty} from "../../../../utilities/helpers";
import {setReceiverCustomer, setSenderCustomer} from '../../../../redux/actions/customerActions';
import ModalButton from "../../../toolbox/ModalButton";
import CreateOrUpdatePackage from "../packages/CreateOrUpdatePackage";
import React from "react";

const SetCustomers = ({setCustomers, setReceiverCustomer, setSenderCustomer}) => {
    return (
        <div className={notEmpty(setCustomers.senderCustomer) || notEmpty(setCustomers.receiverCustomer)
            ? "mb-3"
            : null}>
            {console.log(setCustomers)}
            {notEmpty(setCustomers.senderCustomer)
                ? (
                    <button
                        className="btn btn-warning btn-sm"
                        onClick={() => setSenderCustomer({})}>
                        <i className="fa fa-times"/>
                        <span> Göndərən müştəri: <b>#{setCustomers.senderCustomer.id}</b></span>
                    </button>
                )
                : null}
            {notEmpty(setCustomers.receiverCustomer)
                ? (
                    <button
                        className={notEmpty(setCustomers.senderCustomer)
                            ? "btn btn-info btn-sm mx-2"
                            : "btn btn-info btn-sm"}
                        onClick={() => setReceiverCustomer({})}>
                        <i className="fa fa-times"/>
                        <span> Alan müştəri: <b>#{setCustomers.receiverCustomer.id}</b></span>
                    </button>
                )
                : null}
            {notEmpty(setCustomers.senderCustomer) && notEmpty(setCustomers.receiverCustomer)
                ? (
                    <ModalButton
                        buttonSize='sm'
                        buttonLabel="Bağlama artır"
                        header="Bağlama artır"
                        key={1}
                        size={'lg'}
                        body={<CreateOrUpdatePackage/>}
                    />
                )
                : null}
        </div>
    )
}


const mapStateToProps = state => ({
    setCustomers: state.setCustomerReducer
});

const mapDispatchToProps = {
    setSenderCustomer,
    setReceiverCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(SetCustomers);