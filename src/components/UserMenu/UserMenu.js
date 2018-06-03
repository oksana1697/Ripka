import React from "react"
import { Link } from "react-router-dom"

import "./UserMenu.scss"
import block from "../../helpers/BEM"

const b = block("UserMenu")

const NavigationAddEvent = () => (
  <div className={b()}>
    <button className={b("name")}>
      <img
        alt=""
        className={b("photo")}
        src="http://res.cloudinary.com/ucu/image/upload/v1525618640/profile_dezbeo.png"
      />
      <span> Oksana</span>
    </button>
    <div className={b("options")}>
      <Link className={b("options-item")} to="/user/settings">
        Settings
      </Link>
      <Link className={b("options-item")} to="/logout">
        Logout
      </Link>
    </div>
  </div>
)

export default NavigationAddEvent
