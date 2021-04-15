import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getAllExtraSellingReducer = (state = initialState.allExtraSelling, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_EXTRA_SELLING_BEGIN:
            return state;
        case actionTypes.GET_ALL_EXTRA_SELLING_SUCCESS:
            return action.payload;
        case actionTypes.ADD_EXTRA_SELLING_TO_TABLE:
            return [...state, action.payload]
        case actionTypes.UPDATE_EXTRA_SELLING_ON_TABLE:
            return state.map(extraSelling => {
                if (extraSelling.id === action.payload.id) {
                    extraSelling = action.payload;
                }
                return extraSelling;
            })
        case actionTypes.DELETE_EXTRA_SELLING_FROM_TABLE:
            return state.filter(extraSelling => extraSelling.id !== action.payload.id);
        case actionTypes.GET_ALL_EXTRA_SELLING_ERROR:
            return state
        default:
            return state;
    }
}
