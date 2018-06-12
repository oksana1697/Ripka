import { connect } from "react-redux"
import { fetchEvent } from "../../actions/events"
import { getEventById } from "../../reducers"
import { getIsEventFetching } from "../../reducers/index"

const withEvent = connect(
  (state, { id }) => ({
    id,
    event: getEventById(state, id),
    isFetching: getIsEventFetching(id, state)
  }),
  { fetchEvent },
  ({ event, isFetching, id }, { fetchEvent }, ownProps) => {
    if (!event && !isFetching) fetchEvent(id)
    return event ? { event, id, ...ownProps } : { pending: true, id, ...ownProps }
  }
)

export default withEvent
