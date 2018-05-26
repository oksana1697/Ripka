import React, { Component } from "react"
import { Link } from "react-router-dom"

import "../../styles/navigation.scss"
import "../../styles/common.scss"

class NavigationAddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="navigation__container">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="navigation__logo-content">Ripka</h1>
        </Link>
        <div className="navigation__settings">
          <button className="navigation__settings_name">
            <img
              alt=""
              className="navigation__profile-photo"
              src="http://res.cloudinary.com/ucu/image/upload/v1525618640/profile_dezbeo.png"
            />
            <span> Oksana</span>
          </button>
          <div className="navigation__settings_name_content">
            <Link to="/user/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NavigationAddEvent
