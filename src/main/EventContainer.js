import {Event} from "./Event"
import React, {Component} from 'react';

export const EventContainer = ({events, onTodoClick}) => (
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
);







