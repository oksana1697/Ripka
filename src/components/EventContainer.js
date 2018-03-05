import Event from './Event'
import React from 'react';

const EventContainer = ({events, onTodoClick}) => (
    <ul>
        {
            events.map(event =>
                <Event
                    key={event.id}
                    {...event}
                    onClick={() => onTodoClick(event.id)}
                />

            )
        }
    </ul>

)

export default EventContainer







