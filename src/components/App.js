import React from 'react'
import { Route, Switch } from 'react-router-dom'

import EventAdd from './EventAdd/EventAdd'
import EventsList from './EventsList'
import EventEdit from './EventEdit/EventEdit'
import ManipulateUser from './ManipulateUser'
import Navigation from './Navigation'

import { createUser, editUser } from './HOC/user'

import Landing from './Landing'
import PageNotFound from './PageNotFound/PageNotFound'
import EventDetails from './EventDetails'
import UsersList from './UsersList/UsersList'
import UserDetails from './UserDetails/UserDetails'

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/users" component={() => <UsersList />} />
      <Route exact path="/events" component={() => <EventsList />} />

      <Route exact path="/addevent" component={EventAdd} />
      <Route exact path="/events/edit/:id" component={EventEdit} />

      <Route exact path="/adduser" component={createUser(ManipulateUser)} />
      <Route exact path="/users/edit/:id" component={editUser(ManipulateUser)} />

      <Route exact path="/events/:id" component={EventDetails} />
      <Route exact path="/users/:id" component={UserDetails} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </>
)

export default App
