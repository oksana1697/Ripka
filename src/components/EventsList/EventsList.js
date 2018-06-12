import React from 'react'

import { compose } from 'ramda'

import Event from '../Event'
// import MapContainer from "../MapContainer/MapContainer"

import './EventsList.scss'
import block from '../../helpers/BEM'

import withEvent from '../HOC/withEvent'
import { flattenProp, withProps } from 'recompose'
import { Link, withRouter } from 'react-router-dom'

import { searchEvent } from "../HOC/event"

const b = block('EventsList')

const ConnectedEvent = compose(withEvent, flattenProp('event'))(Event)

const EventsList = ({ events, offset, count, query, totalCount }) => {
  return !events ? null : (
    <div>
      <div className={b('content')}>
        <div className={b('block')}>{events.map(event => <ConnectedEvent id={event} key={event} />)}</div>
        {/*<MapContainer events={events} />*/}
      </div>
      <div className={b('pagination')}>
        {offset !== 0 && (
          <Link className={b('pagination-btn')} to={`/events/?offset=${offset - count}&count=${count}`}>{`< Prev`}</Link>
        )}
        &nbsp;&nbsp;
        {events.length + offset < totalCount && (
          <Link
            className={b('pagination-btn')}
            to={`/events/?offset=${offset + count}&count=${count}`}
          >{`Next >`}</Link>
        )}
      </div>
    </div>
  )
}

const enhancer = compose(
    withRouter,
    withProps(({ location }) => {
        const urlSearch = new URLSearchParams(location.search)
        const offset = Number(urlSearch.get("offset")) || 0
        const count = Number(urlSearch.get("count")) || 9
        const query = urlSearch.get("q") || ""
        return { offset, count, query }
    }),
    searchEvent
)

export default enhancer(EventsList)
