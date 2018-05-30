import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./Navigation.scss"
import block from '../../helpers/BEM'

const b = block('Navigation')

class NavigationAddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className={b()}>
        <div className={b('settings')}>
          <button className={b('settings_name')}>
            <img
              alt=""
              className={b('settings_photo')}
              src="http://res.cloudinary.com/ucu/image/upload/v1525618640/profile_dezbeo.png"
            />
            <span> Oksana</span>
          </button>
          <div className={b('settings_options')}>
            <Link className={b('settings_options_item')} to="/user/settings">Settings</Link>
            <Link className={b('settings_options_item')} to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NavigationAddEvent
