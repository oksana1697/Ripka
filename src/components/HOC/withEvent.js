import { connect } from "react-redux"
import { fetchEvent } from "../../actions/fetch"
import { getEventById } from "../../reducers"
import { getIsEventFetching } from "../../reducers/index"

const withEvent = connect(
  (state, { match }) => {
    const id = Number(match.params.id)
    return {
      id,
      event: getEventById(state, id),
      isFetching: getIsEventFetching(id, state)
    }
  },
  { fetchEvent },
  ({ event, isFetching, id }, { fetchEvent }, ownProps) => {
    if (!event && !isFetching) fetchEvent(id)
    return event ? { event, id, ...ownProps } : { pending: true, id, ...ownProps }
  }
)

export default withEvent