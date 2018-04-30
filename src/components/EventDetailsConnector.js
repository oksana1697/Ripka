import { connect } from "react-redux";
import EventDetails from "./EventDetails/EventDetails";
import { getEventById, getIsEventFetching } from "../reducers";
import { fetchEvent } from "../actions/fetch";

export default connect(
  (state, { id }) => ({
    event: getEventById(id, state),
    isFetching: getIsEventFetching(id, state)
  }),
  { fetchEvent },
  ({ event, isFetching }, { fetchEvent }, { id }) => {
    if (!event && !isFetching) {
      fetchEvent(id);
    }

    return {
      event
    };
  }
)(EventDetails);
