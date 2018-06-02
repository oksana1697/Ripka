import React from "react"

import AddEvent from "./AddEvent/AddEvent"

import VisibleEventList from "./VisibleEventList"
import VisibleUserList from "./VisibleUserList"

import EventDetailsConnector from "./EventDetailsConnector"
import EventEdit from "./EventEdit/EventEdit"
import UserEdit from "./UserEdit/UserEdit"
import UserDetailsConnector from "./UserDetailsConnector"
import { Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"
import AddUser from "./AddUser/AddUser"
import Landing from "./Landing"

import PageNotFound from "./PageNotFound/PageNotFound"

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/addevent" component={AddEvent} />
      <Route exact path="/events/edit/:id" component={EventEdit} />

      <Route exact path="/" component={Landing} />
      <Route exact path="/users" component={VisibleUserList} />
      <Route exact path="/events" component={VisibleEventList} />



      <Route exact path="/adduser">
        {({ history }) => <AddUser onSuccess={() => history.push("/")} />}
      </Route>

      <Route exact path="/events/:id">
        {props => <EventDetailsConnector id={props.match.params.id} onSuccess={() => props.history.push("/events")} />}
      </Route>



      <Route exact path="/users/:id">
        {props => <UserDetailsConnector id={props.match.params.id} onSuccess={() => props.history.push("/users")} />}
      </Route>
      <Route exact path="/users/edit/:id">
        {props => <UserEdit id={props.match.params.id} onSuccess={() => props.history.push("/users")} />}
      </Route>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </>
)

export default App
