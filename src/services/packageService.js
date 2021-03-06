import * as apiService from '../services/apiService';

export const findPackages = findObject => {
    return apiService.post("package/filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const findAdvancedPackages = findObject => {
    return apiService.post("package/advanced_filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const createPackage = p => {
    return apiService.post("package", p)
        .then(data => data)
        .catch(err => err);
}

export const updatePackage = p => {
    return apiService.put("package", p)
        .then(data => data)
        .catch(err => err);
}

export const deletePackage = p => {
    return apiService.del("package/" + p.id)
        .then(data => data)
        .catch(err => err);
}

export const changePackageState = p => {
    return apiService.post("package/change_state", {"id":p.id, "state":Number(p.state)})
        .then(data => data)
        .catch(err => err);
}

export const trackPackage = p => {
    return apiService.post("check_track_state", p)
        .then(data => data)
        .catch(err => err);
}

export const trackPackageViaCustomerIDs = p => {
    return apiService.post("check_track_states_by_customer_id", p)
        .then(data => data)
        .catch(err => err);
}