import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from "react-redux";
import {configureStore} from "./redux/reducers/configureStore";
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);