import Event from './Event'
import React from 'react';

const EventContainer = ({events, onEventClick}) => (
    <ul>
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







