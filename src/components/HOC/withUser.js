import { connect } from "react-redux"
import { fetchUser } from "../../actions/users"
import { getUserById } from "../../reducers"
import { getIsUserFetching } from "../../reducers/index"

const withUser = connect(
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

export default withUser
