import React from "react";
import Footer from "./Footer/Footer";
import Event from "./App";
import AddEvent from "./AddEvent/AddEvent";
import VisibleEventList from "./VisibleEventList";
import EventDetailsConnector from "./EventDetailsConnector";
import EventEdit from "./EventEdit/EventEdit"
import UserEdit from "./UserEdit/UserEdit";
import UserDetailsConnector from "./UserDetailsConnector";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import AddUser from "./AddUser/AddUser";
import VisibleUserList from "./VisibleUserList";
import AddEventNavigation from "./Navigation/NavigationAddUser";
import NavigationLanding from "./Navigation/NavigationLanding";
import Landing from "./Landing/Landing";
// TODO: form validation
// TODO: fix rediraction
// TODO: realise search function(ask family tree)

/**
 * App js description
 */

// TODO: update routing - flag to json server
const App = () => (
    <div>
        <Switch>
            <Route
                exact path="/" render={() => (
                    <div>
                        <NavigationLanding/>
                        <Landing/>
                    </div>
                )}
            />
            <Route exact path="/users">
                <div>
                <NavigationLanding/>
                <VisibleUserList/>
                </div>
            </Route>
            <Route exact path="/events">
                <div>
                    <NavigationLanding/>
                    <VisibleEventList/>
                </div>
            </Route>
            <Route exact path="/addevent">
                {props => <AddEvent onSuccess={() => {
                    return props.history.push("/")
                }}/>}
            </Route>
            <Route exact path="/adduser">
                    {props => <AddUser onSuccess={() => props.history.push("users")}/>
                    }

            </Route>
            <Route exact path="/:id">
                {props => <EventDetailsConnector id={props.match.params.id} onSuccess={()=> props.history.push("/")}/>}
            </Route>


            <Route exact path="/edit/:id">
                {props => <EventEdit id={props.match.params.id} onSuccess={() => props.history.push("/")}/>}
            </Route>

            <Route exact path="/users/:id">
                {props => <UserDetailsConnector id={props.match.params.id}  onSuccess={()=> props.history.push("/users")}/>}
            </Route>
            <Route exact path="/users/edit/:id">
                {props => <UserEdit id={props.match.params.id} onSuccess={() => props.history.push("/users")}/>}
            </Route>
            {/*<Route exact path="/:userName" component={VisibleUserDetailList} />*/}
        </Switch>

        <Footer/>
    </div>
);

export default App;