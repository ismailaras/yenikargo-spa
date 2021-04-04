import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";
import * as notification from '../../../utilities/notification';
import {notEmpty} from "../../../utilities/helpers";

const CANNOT_BE_SAME_TEXT = 'Göndərən və alıcı eyni ola bilməz.'
const CANNOT_BE_SAME_STATION_TEXT = 'Filiallar eyni ola bilməz.'
const SENDER_SET = 'Müştəri göndərən olaraq seçildi.'
const SENDER_UNSET = 'Göndərən müştəri ləğv edildi.'
const RECEIVER_SET = 'Müştəri alan olaraq seçildi.'
const RECEIVER_UNSET = 'Alan müştəri ləğv edildi.'

export const setCustomerReducer = (state = initialState.setCustomer, action) => {
    switch (action.type) {
        case actionTypes.SET_SENDER_CUSTOMER:
            if (action.payload === state.receiverCustomer) {
                notification.warn(CANNOT_BE_SAME_TEXT);
                return state
            }else if(state.receiverCustomer.station_id === action.payload.station_id){
                notification.warn(CANNOT_BE_SAME_STATION_TEXT)
                return state
            }
            else if (!notEmpty(action.payload)) {
                notification.info(SENDER_UNSET)
            } else {
                notification.success(SENDER_SET)
            }
            return {
                senderCustomer: action.payload,
                receiverCustomer: state.receiverCustomer
            };
        case actionTypes.SET_RECEIVER_CUSTOMER:
            if (action.payload === state.senderCustomer) {
                notification.warn(CANNOT_BE_SAME_TEXT);
                return state
            }else if(state.senderCustomer.station_id === action.payload.station_id){
                notification.warn(CANNOT_BE_SAME_STATION_TEXT)
                return state
            }else if (!notEmpty(action.payload)) {
                notification.info(RECEIVER_UNSET)
            } else {
                notification.success(RECEIVER_SET)
            }
            return {
                senderCustomer: state.senderCustomer,
                receiverCustomer: action.payload
            };
        default:
            return state;
    }
}
