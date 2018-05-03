import React from "react";
import Footer from "./Footer/Footer";
import Event from "./App";
import AddEvent from "../containers/AddEvent";
import VisibleEventList from "./VisibleEventList";
import EventDetailsConnector from "./EventDetailsConnector";
import EventEdit from "./EventEdit/EventEdit"
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
                exact path="/" render={() => (
                    <div>
                        <VisibleEventList/>

                    </div>
                )}
            />
            <Route exact path="/users">
                <VisibleUserList/>
            </Route>
            <Route exact path="/addevent">
                {props => <AddEvent onSuccess={() => {
                    return props.history.push("/")
                }}/>}
            </Route>
            <Route exact path="/adduser">
                {props => <AddUser onSuccess={() => props.history.push("users")}/>}
            </Route>
            <Route exact path="/:id">
                {props => <EventDetailsConnector id={props.match.params.id} onSuccess={()=> props.history.push("/")}/>}
            </Route>


            <Route exact path="/edit/:id">
                {props => <EventEdit id={props.match.params.id} onSuccess={() => props.history.push("/")}/>}
            </Route>

            <Route exact path="/users/:id">
                {props => <UserDetailsConnector id={props.match.params.id}/>}
            </Route>
            {/*<Route exact path="/:userName" component={VisibleUserDetailList} />*/}
        </Switch>
        <Footer/>
    </div>
);

export default App;