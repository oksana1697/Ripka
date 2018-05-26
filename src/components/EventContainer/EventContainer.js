import Event from "../Event/Event"
import React, { Fragment } from "react"

import MapContainer from "../MapContainer/MapContainer"

import "../../styles/event.scss"
import "../../styles/common.scss"
import "../../styles/navigation.scss"

const EventContainer = ({ events, onEventClick }) => (
  <Fragment>
    <div className="navigation__subnav">
      <button className="navigation__signUp">Sign up</button>
      <span className="navigation__divider" />
      <button className="navigation__logIn">Log in</button>
    </div>
    <h1 className="event__title">Events</h1>
    <div className="event__content">
      <div className="event__block">
        {events.map(event => (
          <Event key={event.id} {...event} onClick={() => onEventClick(event.id)} />
        ))}
      </div>
      <MapContainer events={events} />
    </div>
  </Fragment>
)

export default EventContainer
