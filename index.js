import Root from "./src/components/Root";
import configureStore from "./src/configureStore";
import React from "react";
import ReactDOM from "react-dom";

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
