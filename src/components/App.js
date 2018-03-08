import React from 'react'
import Footer from './Footer'
import Event from './App'
import AddEvent from '../containers/AddEvent'
import VisibleEventList from '../reducers/VisibleEventList'
import VisibleEventDetailList from '../reducers/VisibleEventDetailsList';
import { HashRouter, Route, Switch } from 'react-router-dom'
import EventDetails from "./EventDetails";

const App = () => (
    <div>
        <AddEvent />
            <Switch>
                <Route exact path='/' component={VisibleEventList}/>
                <Route exact path='/:eventName' component={VisibleEventDetailList}/>
            </Switch>
        <Footer/>
    </div>
);

export default App