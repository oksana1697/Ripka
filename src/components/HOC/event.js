import { connect } from "react-redux"
import { compose } from "ramda"
import { reduxForm } from "redux-form"

import { addEvent } from "../../actions/events"
import { editEvent as editEventactionCreator } from "../../actions/events"
import { withRouter } from "react-router-dom"

import { fetchEvent } from "../../actions/events"
import {
  getIfEventsSearchFetching,
  getIsEventFetching,
  getSearchEventsResult,
  getEventById,
  getEventsSearchTotalCount
} from "../../reducers"
import { mapProps, withProps } from "recompose"
import { searchEvents } from "../../actions/events"

export const searchEvent = connect(
  (state, { offset, count, query }) => ({
    totalCount: getEventsSearchTotalCount(query, state),
    events: getSearchEventsResult(offset, count, query, state),
    isSearchFetching: getIfEventsSearchFetching(offset, count, query, state)
  }),

  { find: searchEvents },

  ({ events, totalCount, isSearchFetching }, { find }, ownProps) => {
    const { query, offset, count } = ownProps

    if (!events && !isSearchFetching) find(query, offset, count)
    return events ? { events, totalCount, ...ownProps } : { pending: true, ...ownProps }
  }
)

export const withEvent = connect(
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

export const createEvent = compose(
  withRouter,
  connect(null, { processEvent: addEvent }),

  reduxForm({
    form: "createEventForm",
    onSubmit: async (data, dispatch, { processEvent, history }) => {
      const action = await processEvent(data)
      history.push("/events/" + action.id)
    }
  })
)

export const editEvent = compose(
  withRouter,
  withProps(({ match }) => ({ id: match.params.id })),
  withEvent,

  connect(null, { processEvent: editEventactionCreator }),

  mapProps(props => ({ initialValues: props.event, ...props })),

  reduxForm({
    form: "addEventForm",
    onSubmit: async (data, dispatch, { id, processEvent, history }) => {
      const action = await processEvent(id, data)
      history.push("/events/" + action.id)
    }
  })
)
