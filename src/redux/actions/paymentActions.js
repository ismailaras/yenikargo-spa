import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as extraSellingService from "../../services/extraSellingService";

export const getAllExtraSellingBegin = () => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const getAllExtraSellingSuccess = allExtraSelling => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_SUCCESS,
    payload: allExtraSelling,
    [pendingTask]: end
})

export const getAllExtraSellingError = error => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_ERROR,
    payload: error,
    [pendingTask]: endAll
})


export const getAllExtraSelling = () => {
    return async dispatch => {
        dispatch(getAllExtraSellingBegin())
        extraSellingService.getAllExtraSelling()
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(getAllExtraSellingError(data.message))
                } else {
                    dispatch(getAllExtraSellingSuccess(data))
                }
            })
            .catch(err => dispatch(getAllExtraSellingError(err)));
    }
}
