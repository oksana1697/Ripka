import Event from "../Event/Event";
import React, { Fragment } from "react";
import Cover from "../Landing/Landing";

import "../../../styles/event.less";

const EventContainer = ({ events, onEventClick }) => (
  <Fragment>
    <Cover />
    <div className="event__block">
      {events.map(event => (
        <Event
          key={event.id}
          {...event}
          onClick={() => onEventClick(event.id)}
        />
      ))}
    </div>
  </Fragment>
);

export default EventContainer;
