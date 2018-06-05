import { searchEvents, searchUsers } from "../../actions/search"
import { withRouter } from "react-router-dom"
import { compose } from "ramda"
import { connect } from "react-redux"
import { getEventsSearchResults, getIfUsersSearchFetching, getSearchUsersResult } from "../../reducers"
import { withProps, withState } from "recompose"

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
  connect(
    (state, { history, query }) => ({
      searchResults: getSearchUsersResult(0, 5, query, state),
      isSearchFetching: getIfUsersSearchFetching(0, 5, query, state),

      onSelect: value => history.push("/users/" + value.id)
    }),
    { find: searchUsers }
  ),
  withProps(({ searchResults, isSearchFetching, query, find }) => {
    if (!searchResults && !isSearchFetching) {
      find(query, 0, 5)
    }
    return {}
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
