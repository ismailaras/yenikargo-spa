import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createExtraSellingReducer = (state = initialState.selectedAllExtraSelling.lastSelectedExtraSelling, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EXTRA_SELLING_BEGIN:
            return state;
        case actionTypes.CREATE_EXTRA_SELLING_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_EXTRA_SELLING_ERROR:
            return state
        default:
            return state;
    }
}
