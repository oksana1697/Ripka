import React from 'react';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux'

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>
);

export default Root