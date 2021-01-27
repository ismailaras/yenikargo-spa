import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteExtraSellingReducer = (state = initialState.selectedAllExtraSelling.lastSelectedExtraSelling, action) => {
    switch (action.type) {
        case actionTypes.DELETE_EXTRA_SELLING_BEGIN:
            return state;
        case actionTypes.DELETE_EXTRA_SELLING_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_EXTRA_SELLING_ERROR:
            return state
        default:
            return state;
    }
}
