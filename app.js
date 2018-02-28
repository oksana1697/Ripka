import React, {Component} from 'react';
import ReactDOM from "react-dom";
import MainPageLayout  from "./src/main/MainPageLayout"
import {store} from "./src/reducers/events";

const render = () => {
    ReactDOM.render(
        <MainPageLayout
            events={store.getState().events}
               store ={store}
        />,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();