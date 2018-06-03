import { searchEvents, searchUsers } from "../../actions/search"
import { withRouter } from "react-router-dom"
import { compose } from "ramda"
import { connect } from "react-redux"

export const withEventsSearch = compose(
  withRouter,
  connect(
    (store, { history }) => ({
      searchResults: store.events.searchEvents,
      onSelect: value => history.push("/events/" + value)
    }),
    { find: searchEvents }
  )
)

export const withUsersSearch = compose(
  withRouter,
  connect(
    (store, { history }) => ({
      searchResults: store.users.searchUsers,
      onSelect: value => history.push("/users/" + value)
    }),
    { find: searchUsers }
  )
)
