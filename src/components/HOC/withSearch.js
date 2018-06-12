import { searchEvents } from "../../actions/search"
import { withRouter } from "react-router-dom"
import { compose } from "ramda"
import { connect } from "react-redux"
import { getEventsSearchResults } from "../../reducers"
import { defaultProps, renameProp, withHandlers, withState } from "recompose"
import { searchUser } from "./user"

export const withEventsSearch = compose(
  withRouter,
  connect(
    (state, { history }) => ({
      searchResults: getEventsSearchResults(state),
      onSelect: value => history.push("/events/" + value.id)
    }),
    { find: searchEvents }
  )
)

export const withUsersSearch = compose(
  withRouter,
  withState("query", "onQueryChange", ""),

  defaultProps({ offset: 0, count: 5 }),
  searchUser,

  renameProp("users", "searchResults"),
  withHandlers({
    onSelect: ({ history }) => value => history.push("/users/" + value.id)
  })
)

// export const withUniversalSearch = compose(
//   withRouter,
//   connect(
//     (state, { history }) => {
//       const events = getEventsSearchResults(state).map(event => ({ ...event, type: "event" })) || []
//       const users = getUsersSearchResults(state).map(user => ({ ...user, type: "user" })) || []
//
//       return {
//         searchResults: [...events, ...users],
//         onSelect: value => {
//           if (value.type === "user") history.push("/users/" + value.id)
//           if (value.type === "event") history.push("/events/" + value.id)
//         }
//       }
//     },
//     dispatch => ({
//       find: value => {
//         dispatch(searchUsers(value))
//         dispatch(searchEvents(value))
//       }
//     })
//   )
// )
