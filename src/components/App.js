import React from 'react'
import Footer from './Footer'
import Event from './App'
import AddEvent from '../containers/AddEvent'
import VisibleEventList from './VisibleEventList'
import VisibleEventDetailList from './VisibleEventDetailsList';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./Navigation";
import AddUser from "../containers/AddUser";
import VisibleUserList from "./VisibleUserList";
import VisibleUserDetailList from "./VisibleUserDetailsList";

const App = () => (
    <div>
    <Navigation/>
            <Switch>
                {/*<Route exact path='/' component={VisibleEventList}/>*/}
                {/*<Route exact path='/' component={VisibleUserList}/>*/}
                <Route exact path='/' render={() =>(
                    <div>
                        <VisibleEventList/>
                        {/*<VisibleUserList/>*/}
                    </div>
                )}/>
                <Route exact path='/addevent' component={AddEvent}/>
                {/*<Route exact path='/adduser' component={AddUser}/>*/}
                <Route exact path='/:eventName' component={VisibleEventDetailList}/>
                {/*<Route exact path='/:userName' component={VisibleUserDetailList}/>*/}

            </Switch>
        <Footer/>
    </div>
);

export default App