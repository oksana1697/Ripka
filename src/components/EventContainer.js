import Event from './Event'
import React from 'react';
import AddEvent from '../containers/AddEvent'

import { events } from '../reducers/events'

const EventContainer = ({events, onEventClick}) => (
    <ul className="AddEvent">
        <AddEvent/>
        {

            events.map(event =>
                <Event
                    key={event.id}
                    {...event}
                    onClick={() => onEventClick(event.id)}
                />

            )
        }
    </ul>

)

export default EventContainer







