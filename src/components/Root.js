import React from 'react';
import App from './App';
import Footer from './Footer';
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/*<App />*/}
            <Route path='/' component={App}/>
        </HashRouter>
    </Provider>
);

export default Root