import React from "react"
import { Link, NavLink, Route } from "react-router-dom"
//
import EventsSearch from "./EventsSearch"
import UsersSearch from "./UsersSearch"
import UserMenu from "../UserMenu/UserMenu"
//
import "./Navigation.scss"
import block from "../../helpers/BEM"
const b = block("Navigation")

const Navigation = () => (
  <div className={b()}>
    <h1 className={b("logo")}>
      <Link to="/">Ripka</Link>
    </h1>

    <NavLink className={b("link")} activeClassName={b("link", ["active"])} to="/events">
      Events
    </NavLink>

    <NavLink className={b("link")} activeClassName={b("link", ["active"])} to="/users">
      Users
    </NavLink>

    <Link to="/addevent">
      <button className={b("button")}>CREATE AN EVENT</button>
    </Link>

    <Route exact path="/users" component={UsersSearch} />
    <Route exact path="/events" component={EventsSearch} />
    <UserMenu />
  </div>
)

export default Navigation
