import { connect } from "react-redux"
import { compose } from "ramda"
import { reduxForm } from "redux-form"

import { addUser } from "../../actions/add"
import { editUser as editUseractionCreator } from "../../actions/edit"
import { withRouter } from "react-router-dom"

import { fetchUser } from "../../actions/fetch"
import { getIsUserFetching, getUserById } from "../../reducers"
import { mapProps } from "recompose"

const withUser = connect(
  (state, { match }) => {
    const id = Number(match.params.id)
    return {
      id,
      user: getUserById(state, id),
      isUserFetching: getIsUserFetching(id, state)
    }
  },
  { fetchUser },
  ({ user, isUserFetching, id }, { fetchUser }, ownProps) => {
    if (!user && !isUserFetching) fetchUser(id)
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
