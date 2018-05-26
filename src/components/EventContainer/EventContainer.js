import Event from "../Event"
import React from "react"

import MapContainer from "../MapContainer/MapContainer"

import "./EventContainer.scss"
import block from "../../helpers/BEM"
const b = block("EventContainer")

const EventContainer = ({ events }) => (
  <>
    <div className="navigation__subnav">
      <button className="navigation__signUp">Sign up</button>
      <span className="navigation__divider" />
      <button className="navigation__logIn">Log in</button>
    </div>

    <h1 className={b("title")}>Events</h1>
    <div className={b("content")}>
      <div className={b("block")}>{events.map(event => <Event key={event.id} {...event} />)}</div>
      <MapContainer events={events} />
    </div>
  </>
)

export default EventContainer
