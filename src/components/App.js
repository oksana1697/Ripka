import React from "react"

import EventAdd from "./EventAdd/EventAdd"

import VisibleEventList from "./VisibleEventList"
import VisibleUserList from "./VisibleUserList"

import EventDetailsConnector from "./EventDetailsConnector"
import EventEdit from "./EventEdit/EventEdit"
import ManipulateUser from "./ManipulateUser"
import UserDetailsConnector from "./UserDetailsConnector"
import { Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"

import { createUser, editUser } from "./HOC/user"

import Landing from "./Landing"

import PageNotFound from "./PageNotFound/PageNotFound"

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/users" component={VisibleUserList} />
      <Route exact path="/events" component={VisibleEventList} />

      <Route exact path="/addevent" component={EventAdd} />
      <Route exact path="/events/edit/:id" component={EventEdit} />

      <Route exact path="/adduser" component={createUser(ManipulateUser)} />
      <Route exact path="/users/edit/:id" component={editUser(ManipulateUser)} />

      <Route exact path="/events/:id">
        {props => <EventDetailsConnector id={props.match.params.id} onSuccess={() => props.history.push("/events")} />}
      </Route>

      <Route exact path="/users/:id">
        {props => <UserDetailsConnector id={props.match.params.id} onSuccess={() => props.history.push("/users")} />}
      </Route>

      <Route path="*" component={PageNotFound} />
    </Switch>
  </>
)

export default App
