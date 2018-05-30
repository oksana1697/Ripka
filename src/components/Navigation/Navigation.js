import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
//
import NavigationSearchEvents from './NavigationSearchEvents'
import NavigationSearchUsers from './NavigationSearchUsers'
import NavigationAddEvent from "./NavigationAddEvent";
import NavigationLanding from "./NavigationInit";
//
import './Navigation.scss'
import block from '../../helpers/BEM'
const b = block('Navigation')

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={b()}>
          <h1 className={b('logo')}>
              <Link to="/">Ripka</Link>
          </h1>
          <Route exact path="/" component={NavigationLanding}/>
          <Route exact path="/users" component={NavigationSearchUsers} />
          <Route exact path="/events" component={NavigationSearchEvents} />
          <Route exact path="/addevent" component={NavigationAddEvent}/>
        </div>
    )
  }
}

export default Navigation
