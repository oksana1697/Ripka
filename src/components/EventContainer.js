import Event from './Event'
import React from 'react';
import AddEvent from '../containers/AddEvent'

const EventContainer = ({events, onEventClick}) => (
    <ul>
        <AddEvent />
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







