import React, {Component} from 'react';
import ReactDOM from "react-dom";
import MainPageLayoutVolunteer  from "./src/components/main/MainPageLayoutVolunteer"
import {store} from "./src/components/reducers/events";

ReactDOM.render(
    <MainPageLayoutVolunteer events={store.getState().events}
    store ={store}/>,
    document.getElementById('root')
);