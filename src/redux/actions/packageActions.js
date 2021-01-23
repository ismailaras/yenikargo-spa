import * as actionTypes from "./actionTypes";
import * as packageService from "../../services/packageService";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import {addToCart} from "./cartActions";
import * as notification from '../../utilities/notification';
import {Routes} from "../../routes";

export const findPackagesBegin = () => ({
    type: actionTypes.FIND_PACKAGES_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const findPackagesSuccess = packages => ({
    type: actionTypes.FIND_PACKAGES_SUCCESS,
    payload: packages,
    [pendingTask]: end
})

export const findPackagesByBarcodeSuccess = packages => ({
    type: actionTypes.FIND_PACKAGES_BY_BARCODE_SUCCESS,
    payload: packages,
    [pendingTask]: end
})

export const findPackagesError = error => ({
    type: actionTypes.FIND_PACKAGES_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectPackages = selectedPackages => ({
    type: actionTypes.SELECT_PACKAGES,
    payload: selectedPackages
})

export const updateSelectedPackageData = selectedPackage => ({
    type: actionTypes.UPDATE_SELECTED_PACKAGE_DATA,
    payload: selectedPackage
})

export const deleteSelectedPackageData = selectedPackage => ({
    type: actionTypes.DELETE_SELECTED_PACKAGE_DATA,
    payload: selectedPackage
})

export const createPackageBegin = () => ({
    type: actionTypes.CREATE_PACKAGE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createPackageSuccess = p => ({
    type: actionTypes.CREATE_PACKAGE_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const createPackageError = error => ({
    type: actionTypes.CREATE_PACKAGE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updatePackageBegin = () => ({
    type: actionTypes.UPDATE_PACKAGE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updatePackageSuccess = p => ({
    type: actionTypes.UPDATE_PACKAGE_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const updatePackageError = error => ({
    type: actionTypes.UPDATE_PACKAGE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deletePackageBegin = () => ({
    type: actionTypes.DELETE_PACKAGE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deletePackageSuccess = p => ({
    type: actionTypes.DELETE_PACKAGE_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const deletePackageError = error => ({
    type: actionTypes.DELETE_PACKAGE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const addCourierToPackages = (courier, packages) => ({
    type: actionTypes.ADD_COURIER_TO_PACKAGES,
    payload: {courier, packages}
})

export const createPackage = (p, history) => {
    return async dispatch => {
        dispatch(createPackageBegin())
        packageService.createPackage(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createPackageError(data.message))
                } else {
                    dispatch(createPackageSuccess(data));
                    dispatch(addToCart({
                        ...data,
                        paymentFor: 'Package'
                    }));
                    history.push(Routes.checkout);
                    notification.success('Bağlama artırıldı.')
                }
            })
            .catch(err => dispatch(createPackageError(err)));
    }
}

export const updatePackage = (p, selectedPackage) => {
    return async dispatch => {
        dispatch(updatePackageBegin())
        packageService.updatePackage(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updatePackageError(data.message))
                } else {
                    dispatch(updatePackageSuccess(data))
                    dispatch(updateSelectedPackageData(changeSelectedPackageValues(data, selectedPackage)))
                    notification.success('Bağlama məlumatları tənzimləndi')
                }
            })
            .catch(err => dispatch(updatePackageError(err)));
    }
}

export const deletePackage = p => {
    return async dispatch => {
        dispatch(deletePackageBegin())
        packageService.deletePackage(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deletePackageError(data.message))
                } else {
                    dispatch(deletePackageSuccess(p))
                    dispatch(deleteSelectedPackageData(p))
                    notification.success('Bağlama silindi')
                }
            })
            .catch(err => dispatch(deletePackageError(err)));
    }
}

export const findPackages = findObject => {
    return async dispatch => {
        dispatch(findPackagesBegin())
        packageService.findPackages(findObject)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(findPackagesError(data.message))
                } else {
                    if (findObject.via === 'viaBarcode') {
                        dispatch(findPackagesByBarcodeSuccess(data));
                    } else {
                        dispatch(findPackagesSuccess(data))
                    }
                }
            })
            .catch(err => dispatch(findPackagesError(err)));
    }
}

const changeSelectedPackageValues = (values, lastSelectedPackage) => {
    for (let field in lastSelectedPackage) {
        for (let value in values) {
            if (field === value) {
                lastSelectedPackage[field] = values[value]
            }
        }
    }
    return lastSelectedPackage;
}