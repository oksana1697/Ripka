import React from 'react';
import Footer from './Footer/Footer';
import AddEvent from './AddEvent/AddEvent';
import VisibleEventList from './VisibleEventList';
import EventDetailsConnector from './EventDetailsConnector';
import EventEdit from './EventEdit/EventEdit';
import UserEdit from './UserEdit/UserEdit';
import UserDetailsConnector from './UserDetailsConnector';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import AddUser from './AddUser/AddUser';
import VisibleUserList from './VisibleUserList';
import NavigationSearchEvents from './Navigation/NavigationSearchEvents';
import Landing from './Landing/Landing';
import NavigationSearchUsers from "./Navigation/NavigationSearchUsers";
import PageNotFound from "./PageNotFound/PageNotFound";
/**
 * App js description
 */

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Navigation/>
            <Landing/>
          </div>
        )}
      />
      <Route exact path="/users">
        <div>
          <NavigationSearchUsers />
          <VisibleUserList />
        </div>
      </Route>
      <Route exact path="/events">
        <div>
          <NavigationSearchEvents />
          <VisibleEventList />
        </div>
      </Route>


      <Route exact path="/addevent">
        {props => (
          <AddEvent
            onSuccess={() => {
              return props.history.push('/');
            }}
          />
        )}
      </Route>
      <Route exact path="/adduser">
        {props => <AddUser onSuccess={() => props.history.push('users')} />
        }
      </Route>
      <Route exact path="/events/:id">
        {props => (
          <EventDetailsConnector
            id={props.match.params.id}
            onSuccess={() => props.history.push('/events')}
          />
        )}
      </Route>
      <Route exact path="/events/edit/:id">
        {props => (
          <EventEdit
            id={props.match.params.id}
            onSuccess={() => props.history.push('/events')}
          />
        )}
      </Route>

      <Route exact path="/users/:id">
        {props => (
          <UserDetailsConnector
            id={props.match.params.id}
            onSuccess={() => props.history.push('/users')}
          />
        )}
      </Route>
      <Route exact path="/users/edit/:id">
        {props => (
          <UserEdit
            id={props.match.params.id}
            onSuccess={() => props.history.push('/users')}
          />
        )}
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Switch>

    <Footer />
  </div>
);

export default App;
