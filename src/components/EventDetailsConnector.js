import { connect } from 'react-redux';
import EventDetails from './EventDetails/EventDetails';
import { getAllAvailableEvents, getIsEventFetching } from '../reducers';
import { fetchEvent } from '../actions/fetch';
import { deleteEvent } from '../actions/delete';
import { getEventById } from '../reducers';

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

// export default connect(
//   (state, { id }) =>
//       console.log("state from details:", state, id)
//       ({
//     // event: getEventById(id, state),
//     event: getEventById(state, id),
//     isFetching: getIsEventFetching(id, state),
//   }),
//   { fetchEvent },
//   ({ event, isFetching }, { fetchEvent }, { id }) => {
//     if (!event && !isFetching) {
//       fetchEvent(id);
//     }
//     return {
//       event,
//     };
//   },
// )(EventDetails);
// VisibleEventList = withRouter(
//     connect(store => {
//             console.log();
//             const ids = getAllAvailableEvents(store);
//             return {
//                 events: ids.map((id)=>getEventById(store, id))
//             }
//         },
//         {fetchEvents}
//     )(VisibleEventList));
