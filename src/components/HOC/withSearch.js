import { withRouter } from "react-router-dom"
import { compose } from "ramda"
import { defaultProps, withProps, withState } from "recompose"
import { searchUser } from "./user"
import { searchEvent } from "./event"

export const withUniversalSearch = compose(
  withRouter,
  withState("query", "onQueryChange", ""),
  defaultProps({ offset: 0, count: 5 }),
  searchEvent,
  searchUser,
  withProps(({ events = [], users = [] }) => ({
    searchResults: [
      //prettier-ignore
      ...events.map(result => ({ result, type: "event" })),
      ...users.map(result => ({ result, type: "user" }))
    ]
  }))
)
