import * as apiService from '../services/apiService';

export const getStations = () => {
    return apiService.get("station")
        .then(data => data)
        .catch(err => err);
}
