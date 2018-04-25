import React from "react";
import Footer from "./Footer/Footer";
import Event from "./App";
import AddEvent from "../containers/AddEvent";
import VisibleEventList from "./VisibleEventList";
import EventDetailsConnector from "./EventDetailsConnector";
import UserDetailsConnector from "./UserDetailsConnector";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import AddUser from "../containers/AddUser";
import VisibleUserList from "./VisibleUserList";

/**
 * App js description
 */
const App = () => (
    <div>
        <Navigation/>
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <div>
                        <VisibleEventList/>
                        <VisibleUserList/>
                    </div>
                )}
            />
            <Route exact path="/addevent">
                {props => <AddEvent onSuccess={() => props.history.push("/")}/>}
            </Route>
            <Route exact path="/adduser" component={AddUser}/>
            <Route exact path="/:id">
                {props => <EventDetailsConnector id={props.match.params.id}/>}
            </Route>
            <Route exact path="/:id">
                {props => <UserDetailsConnector id={props.match.params.id}/>}
            </Route>
            {/*<Route exact path="/:userName" component={VisibleUserDetailList} />*/}
        </Switch>
        <Footer/>
    </div>
);

export default App;
