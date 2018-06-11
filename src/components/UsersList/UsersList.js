import React from "react"
import { connect } from "react-redux"
import { compose } from "ramda"

import User from "../User"
// import MapContainerUsers from "../MapContainer/MapContainerUsers"

import { getIfUsersSearchFetching, getSearchUsersResult } from "../../reducers"

import "./UsersList.scss"
import block from "../../helpers/BEM"

import { searchUsers } from "../../actions/search"
import withUser from "../HOC/withUser"
import { flattenProp, withProps } from "recompose"
import { Link, withRouter } from "react-router-dom"
import { getUsersSearchTotalCount } from "../../reducers/index"

const b = block("UsersList")

const ConnectedUser = compose(withUser, flattenProp("user"))(User)

const UsersList = ({ users, offset, count, query, totalCount }) => {
  return !users ? null : (
    <div>
      <div className={b("content")}>
        <div className={b("block")}>{users.map(user => <ConnectedUser id={user} key={user} />)}</div>
        {/*<MapContainerUsers users={users} />*/}
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
  // Todo add comments for hack
  // Todo : update Env or configure prettier
  withProps(({ location }) => {
    const urlSearch = new URLSearchParams(location.search)
    const offset = Number(urlSearch.get("offset")) || 0
    const count = Number(urlSearch.get("count")) || 9
    const query = urlSearch.get("q") || ""
    return { offset, count, query }
  }),

  connect(
    (state, { offset, count, query }) => ({
      totalCount: getUsersSearchTotalCount(query, state),
      users: getSearchUsersResult(offset, count, query, state),
      isSearchFetching: getIfUsersSearchFetching(offset, count, query, state)
    }),

    { find: searchUsers },

    ({ users, totalCount, isSearchFetching }, { find }, ownProps) => {
      const { query, offset, count } = ownProps

      if (!users && !isSearchFetching) find(query, offset, count)
      return users ? { users, totalCount, ...ownProps } : { pending: true, ...ownProps }
    }
  )
)

export default enhancer(UsersList)
