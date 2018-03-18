import Root from './src/components/Root'
import configureStore from './configureStore'
import React from 'react';
import ReactDOM from 'react-dom';
import test_test from './fakeData'

const store = configureStore();
ReactDOM.render(

    <Root store={store} />,
    document.getElementById('root')
);