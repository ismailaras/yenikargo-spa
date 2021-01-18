import {applyMiddleware, createStore} from "redux";
import rootReducer from './index';
import thunk from "redux-thunk";

export const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}