import React, {useEffect} from "react";
import {changePackageState} from "../../../../redux/actions/packageActions";
import {iterTrackingStates} from "../../../../enums/trackingStateEnum";
import {connect} from "react-redux";
import SelectInput from "../../../toolbox/SelectInput";
import {useFormik} from "formik";
import {changePackageStateFormValidationSchema} from "../../../../utilities/formValidationSchemas";
import {getEmployeeCredentialsFromToken} from "../../../../utilities/helpers";
import {useHistory} from "react-router-dom";
import * as authActions from "../../../../redux/actions/authActions";
import {findAdvancedPackages, findPackages} from "../../../../redux/actions/packageActions";

const ChangePackageState = ({
                                selectedPackages,
                                changePackageState,
                                auth,
                                signIn,
                                findAdvancedPackages,
                                findPackages,
                                filteredPackageKeys
                            }) => {
    const history = useHistory();
    let idArray = []
    selectedPackages.allSelectedPackages.map(a => {
        return idArray.push(a.id)
    })
    let initialValues = {
        ids: idArray,
        state: 0,
    };
    useEffect(() => {
        if (!auth.isAuthenticated) {
            signIn(getEmployeeCredentialsFromToken(), history);
        }
    });
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting,
    } = useFormik({
        initialValues,
        validationSchema: changePackageStateFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            changePackageState(values, selectedPackages.allSelectedPackages);
            setTimeout(() => {
                filteredPackageKeys.states ?
                    findAdvancedPackages(filteredPackageKeys)
                    : findPackages(filteredPackageKeys)
            }, 500)
            setSubmitting(false);
        },
    });
    const fPackage = selectedPackages.allSelectedPackages[0]
    const trackingStateItems = [
        {id: 0, name: "Declared", isSender: true, isReceiver: false, isSorting: false},
        {id: 1, name: "ReadyToSorting", isSender: true, isReceiver: false, isSorting: true},
        {id: 2, name: "Sorting", isSender: false, isReceiver: false, isSorting: true},
        {id: 3, name: "OnWay", isSender: false, isReceiver: true, isSorting: true},
        {id: 4, name: "Arrived", isSender: false, isReceiver: true, isSorting: false},
        // Delivered: 5
    ]

    const validateAuthStatus = (a) => {
        if (auth.currentEmployee.is_sorting_admin) {
            return a.isSorting !== false
        } else if (auth.currentEmployee.is_operator_admin) {
            if (fPackage.sender_station_id === auth.currentEmployee.station_id) {
                return a.isSender !== false
            } else if (fPackage.receiver_station_id === auth.currentEmployee.station_id) {
                return a.isReceiver !== false
            }
        }
        return a
    }
    return (
        <form onSubmit={handleSubmit}>
            <SelectInput
                value={values.state}
                name="state"
                options={trackingStateItems
                    .filter(a => validateAuthStatus(a))
                    .map((trackingStateObj, index) => ({
                        value: trackingStateObj.id,
                        text: trackingStateObj.name
                    }))}
                label="Bağlama statusu"
                defaultOption="Status seçin"
                touched={touched.state}
                error={errors.state}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                <i className="fa fa-search"/>
                <span> Təsdiqlə</span>
            </button>
        </form>
    );
};

const mapDispatchToProps = {
    changePackageState,
    signIn: authActions.signIn,
    findPackages,
    findAdvancedPackages
};

const mapStateToProps = (state) => ({
    selectedCouriers: state.selectCouriersReducer,
    selectedPackages: state.selectPackagesReducer,
    auth: state.authReducer,
    filteredPackageKeys: state.setPackagesFilterKeysReducer

});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePackageState);
