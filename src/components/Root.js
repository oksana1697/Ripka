
import React from 'react';
import App from './App';
import { HashRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
const { Provider } = require('react-redux')
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
);

export default Root;
