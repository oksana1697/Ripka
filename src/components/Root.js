import React from "react";
import App from "./App";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";

const { Provider } = require("react-redux");
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

export default Root;
