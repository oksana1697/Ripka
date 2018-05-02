import { connect } from 'react-redux';
import EventDetails from './EventDetails/EventDetails';
import { getAllAvailableEvents, getIsEventFetching } from '../reducers';
import { fetchEvent } from '../actions/fetch';
import { getEventById } from '../reducers';


export default connect(
  (state, { id }) =>
      ({
    event: getEventById(state, id),
    isFetching: getIsEventFetching(id, state),
  }),
  { fetchEvent },
  ({ event, isFetching }, { fetchEvent }, { id },store) => {
      if (!event && !isFetching) {
          fetchEvent(id)
      }
      return {
          event
      };
  })(EventDetails);



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