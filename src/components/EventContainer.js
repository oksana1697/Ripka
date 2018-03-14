import Event from './Event'
import React from 'react';
import AddEvent from '../containers/AddEvent'

import { events } from '../reducers/events'

const EventContainer = ({events, onEventClick}) => (
    <ul className="add-event">
        <AddEvent/>
        <div className="event__block">
        {
            events.map(event =>
                <Event
                    key={event.id}
                    {...event}
                    onClick={() => onEventClick(event.id)}
                />

            )
        }
        </div>

    </ul>

)

export default EventContainer







