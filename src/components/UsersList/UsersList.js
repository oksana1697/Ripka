import React from "react"

import { compose } from "ramda"

import User from "../User"
import MapContainerUsers from "../MapContainer/MapContainerUsers"

import "./UsersList.scss"
import block from "../../helpers/BEM"

import withUser from "../HOC/withUser"
import { flattenProp, withProps } from "recompose"
import { Link, withRouter } from "react-router-dom"

import { searchUser } from "../HOC/user"

const b = block("UsersList")

const ConnectedUser = compose(withUser, flattenProp("user"))(User)

const UsersList = ({ users, offset, count, query, totalCount }) => {
  return !users ? null : (
    <div>
      <div className={b("content")}>
        <div className={b("block")}>{users.map(id => <ConnectedUser id={id} key={id} />)}</div>

        <MapContainerUsers users={users} />
      </div>
      <div className={b("pagination")}>
        {offset !== 0 && (
          <Link className={b("pagination-btn")} to={`/users/?offset=${offset - count}&count=${count}`}>{`< Prev`}</Link>
        )}
        &nbsp;&nbsp;
        {users.length + offset < totalCount && (
          <Link className={b("pagination-btn")} to={`/users/?offset=${offset + count}&count=${count}`}>{`Next >`}</Link>
        )}
      </div>
    </div>
  )
}

const enhancer = compose(
  withRouter,
  withProps(({ location }) => {
    const urlSearch = new URLSearchParams(location.search)
    const offset = Number(urlSearch.get("offset")) || 0
    const count = Number(urlSearch.get("count")) || 9
    const query = urlSearch.get("q") || ""
    return { offset, count, query }
  }),
  searchUser
)

export default enhancer(UsersList)
