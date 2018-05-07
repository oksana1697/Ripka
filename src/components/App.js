import React from "react";
import Footer from "./Footer/Footer";
import Event from "./App";
import AddEvent from "../containers/AddEvent";
import VisibleEventList from "./VisibleEventList";
import EventDetailsConnector from "./EventDetailsConnector";
import EventEdit from "./EventEdit/EventEdit"
import UserEdit from "./UserEdit/UserEdit";
import UserDetailsConnector from "./UserDetailsConnector";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import AddUser from "../containers/AddUser";
import VisibleUserList from "./VisibleUserList";
import AddEventNavigation from "./Navigation/AddEventNavigation";

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
                        {/*<Navigation/>*/}
                        <VisibleEventList/>

                    </div>
                )}
            />
            <Route exact path="/users">
                <div>
                <Navigation/>
                <VisibleUserList/>
                </div>
            </Route>
            <Route exact path="/addevent">
                {/*<div>*/}
                {/*<AddEventNavigation/>*/}
                {props => <AddEvent onSuccess={() => {
                    return props.history.push("/")
                }}/>}
                {/*</div>*/}
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