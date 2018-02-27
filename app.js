import MainPageLayoutVolunteer from "./src/components/main/MainPageLayoutVolunteer"
import Events from "./src/redux-store"
import React, {Component} from 'react';

import ReactDOM from "react-dom";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MainPageLayoutVolunteer/>, wrapper) : false;
