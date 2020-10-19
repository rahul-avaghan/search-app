import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import thunkMw from 'redux-thunk';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import initialState from "./store/initialstate";
import {Store} from "./store/store";

export const configureStore = (initialState: Partial<Store>): any => {
    const middlewares = [thunkMw];
    // @ts-ignore
    return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
};

const store = configureStore(initialState);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
