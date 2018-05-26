import { connect } from 'react-redux';
import EventDetails from './EventDetails/EventDetails';

import { getEventById, getIsEventFetching } from '../reducers/index';
import { fetchEvent } from '../actions/fetch';
import { deleteEvent } from '../actions/delete';

export default connect(
  (state, { id, onSuccess }) => ({
    event: getEventById(state, id),
    isFetching: getIsEventFetching(id, state),
    onSuccess,
    deleteEvent,
  }),
  { fetchEvent, deleteEvent },
  ({ event, isFetching }, { fetchEvent, deleteEvent }, { id, onSuccess }) => {
    if (!event && !isFetching) {
      fetchEvent(id);
    }
    return {
      event,
      onSuccess,
      deleteEvent
    };
  },
)(EventDetails);
