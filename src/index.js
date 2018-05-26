import Root from "./components/Root";
import configureStore from "./configureStore";
import React from "react";
import ReactDOM from "react-dom";

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
