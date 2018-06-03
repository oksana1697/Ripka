import { connect } from "react-redux"
import {fetchUser} from "../../actions/fetch"
import {getIsUserFetching, getUserById} from "../../reducers/index"

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

export default withUser
