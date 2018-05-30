import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navigation.scss'
import block from '../../helpers/BEM'

const b = block('Navigation')

class NavigationInit extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={b()}>
                <NavLink className={b('link')} activeClassName={b('link', ['active'])} to="/events">
                Events
                </NavLink>
                <NavLink className={b('link')} activeClassName={b('link', ['active'])} to="/users">
                Users
                </NavLink>
                <Link to="/addevent">
                <button className={b('button')}>CREATE AN EVENT</button>
                </Link>
            </div>
        )
    }
}

export default NavigationInit
