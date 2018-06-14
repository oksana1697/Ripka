import { connect } from "react-redux"
import { compose } from "ramda"
import { reduxForm } from "redux-form"

import { addUser } from "../../actions/users"
import { editUser as editUseractionCreator } from "../../actions/users"
import { withRouter } from "react-router-dom"

import { fetchUser } from "../../actions/users"
import {
  getIfUsersSearchFetching,
  getIsUserFetching,
  getSearchUsersResult,
  getUserById,
  getUsersSearchTotalCount
} from "../../reducers"
import { mapProps, withProps } from "recompose"
import { searchUsers } from "../../actions/users"

export const searchUser = connect(
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

export const withUser = connect(
  (state, { id }) => ({
    id,
    user: getUserById(state, id),
    isFetching: getIsUserFetching(id, state)
  }),
  { fetchUser },
  ({ user, isFetching, id }, { fetchUser }, ownProps) => {
    if (!user && !isFetching) fetchUser(id)
    return user ? { user, id, ...ownProps } : { pending: true, id, ...ownProps }
  }
)

export const createUser = compose(
  withRouter,
  connect(null, { processUser: addUser }),

  reduxForm({
    form: "createUserForm",
    onSubmit: async (data, dispatch, { processUser, history }) => {
      const action = await processUser(data)
      history.push("/users/" + action.id)
    }
  })
)

export const editUser = compose(
  withRouter,
  withProps(({ match }) => ({ id: match.params.id })),
  withUser,

  connect(null, { processUser: editUseractionCreator }),

  mapProps(props => ({ initialValues: props.user, ...props })),

  reduxForm({
    form: "addUserForm",
    onSubmit: async (data, dispatch, { id, processUser, history }) => {
      const action = await processUser(id, data)
      history.push("/users/" + action.id)
    }
  })
)
