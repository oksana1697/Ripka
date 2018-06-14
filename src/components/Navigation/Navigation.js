import React from "react"
//
import { Link, NavLink } from "react-router-dom"
import { withUniversalSearch } from "../HOC/withSearch"
import UserMenu from "../UserMenu"
import Search from "../Search"
//
import "./Navigation.scss"
import block from "../../helpers/BEM"
const b = block("Navigation")

const UniversalSearch = withUniversalSearch(Search)

const Navigation = () => (
  <div className={b()}>
    <h1 className={b("logo")}>
      <Link to="/">Ripka</Link>
    </h1>

    <UniversalSearch />
    {/*<UniversalSearch2/>*/}

    <NavLink className={b("link")} activeClassName={b("link", ["active"])} to="/events">
      Events
    </NavLink>

    <NavLink className={b("link")} activeClassName={b("link", ["active"])} to="/users">
      Users
    </NavLink>

    <Link to="/addevent">
      <button className={b("button")}>CREATE AN EVENT</button>
    </Link>
    <UserMenu />
  </div>
)

export default Navigation
