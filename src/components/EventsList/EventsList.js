import React from "react"
import { connect } from "react-redux"
import { compose } from "ramda"

import Event from "../Event"
import MapContainer from "../MapContainer/MapContainer"

import { getSearchEventsResult } from "../../reducers"

import "./EventsList.scss"
import block from "../../helpers/BEM"

import { searchEvents } from "../../actions/search"
import withEvent from "../HOC/withEvent"
import { flattenProp, withProps } from "recompose"
import { Link, withRouter } from "react-router-dom"

const b = block("EventsList")

const ConnectedEvent = compose(withEvent, flattenProp("event"))(Event)

const EventsList = ({ events, offset, count, query }) => {
  return !events ? null : (
    <div>
      <div className={b("content")}>
        <div className={b("block")}>{events.map(event => <ConnectedEvent id={event} key={event} />)}</div>
        {/*<MapContainer events={events} />*/}
      </div>
      <div className={b("pagination")}>
        {offset !== 0 && <Link className={b("pagination-btn")} to={`/events/?offset=${offset - count}&count=${count}`}>{`< Prev`}</Link>}
        &nbsp;&nbsp;
        {events.length === count && <Link className={b("pagination-btn")} to={`/events/?offset=${offset + count}&count=${count}`}>{`Next >`}</Link>}
      </div>
    </div>
  )
}

const enhancer = compose(
  withRouter,
  withProps(({ location }) => {
    const urlSearch = new URLSearchParams(location.search)
    const offset = Number(urlSearch.get("offset")) || 0
    const count = Number(urlSearch.get("count")) || 5
    const query = urlSearch.get("q") || ""
    return { offset, count, query }
  }),

  connect(
    (state, { offset, count, query }) => ({ events: getSearchEventsResult(offset, count, query, state) }),

    { find: searchEvents },

    ({ events }, { find }, ownProps) => {
      const { query, offset, count } = ownProps

      if (!events) find(query, offset, count)
      return events ? { events, ...ownProps } : { pending: true, ...ownProps }
    }
  )
)

export default enhancer(EventsList)
