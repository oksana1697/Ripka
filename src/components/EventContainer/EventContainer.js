import Event from "../Event/Event";
import React, {Fragment} from "react";
import Cover from "../Landing/Landing";
import MapContainer from '../MapContainer/MapContainer'

import "../../../styles/event.less";
import "../../../styles/common.less";
import "../../../styles/navigation.less"

const EventContainer = ({events, onEventClick}) => (
    <Fragment>
        <div className='navigation__subnav'>
            <button className='navigation__signUp'>Sign up</button>
            <span className='navigation__divider'></span>
            <button className='navigation__logIn'>Log in</button>
        </div>
        <h1 className="event__title">Events</h1>
        <div className="event__content">
            <div className="event__block">
                {events.map(event => (
                    <Event
                        key={event.id}
                        {...event}
                        onClick={() => onEventClick(event.id)}
                    />
                ))}
            </div>
            <MapContainer events={events}/>
        </div>
        <div className="event__pagination">
            <a className="event__pagination_nav" href="#">&laquo;</a>
            <a className="event__pagination_nav" href="#">&raquo;</a>
        </div>
    </Fragment>
);

export default EventContainer;
