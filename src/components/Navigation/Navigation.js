import React, { Component } from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

import '../../styles/navigation.scss'
import block from '../../helpers/BEM'

import NavigationSearchEvents from './NavigationSearchEvents'
import NavigationSearchUsers from './NavigationSearchUsers'

const b = block('navigation')

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
          <Route exact path="/users" component={NavigationSearchUsers} />
          <Route exact path="/events" component={NavigationSearchEvents} />
          <NavLink className={b('link')} activeClassName={b('link', ['active'])} to="/events">
            Events
          </NavLink>
          <NavLink className={b('link')} activeClassName={b('link', ['active'])} to="/users">
            Users
          </NavLink>

          <Link className="navigation__button_right" to="/addevent">
            <button className="navigation__button">CREATE AN EVENT</button>
          </Link>
        </div>
    )
  }
}

export default Navigation
