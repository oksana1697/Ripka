import Event from './Event'
import React from 'react';
import AddEvent from '../containers/AddEvent'

import { events } from '../reducers/events'
import Cover from "./Cover";

const EventContainer = ({events, onEventClick}) => (

    <ul>
        <Cover/>
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







