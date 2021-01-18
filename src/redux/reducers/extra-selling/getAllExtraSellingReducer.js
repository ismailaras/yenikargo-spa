import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getAllExtraSellingReducer = (state = initialState.allExtraSelling, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_EXTRA_SELLING_BEGIN:
            return state;
        case actionTypes.GET_ALL_EXTRA_SELLING_SUCCESS:
            return action.payload;
        case actionTypes.GET_ALL_EXTRA_SELLING_ERROR:
            return state
        default:
            return state;
    }
}
