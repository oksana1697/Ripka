import { Event } from "./Event"
import React, {Component} from 'react';
export const EventContainer = ({events}) => (
    <ul>
        {events.map(event =>
            <Event
                key={event.id}
                {...event}
            />
        )}
    </ul>
);


const event = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'REMOVE_EVENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};






