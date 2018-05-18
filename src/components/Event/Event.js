import React from "react";
import {NavLink} from "react-router-dom";

import "../../../styles/event.less";
import "../../../styles/common.less";


/**
 * Represents view of single Event
 */
const Event = ({
                   id,
                   name,
                   description,
                   date,
                   location,
                   organization,
                   photo
               }) => (
    <div className="event__container ">
        <div>
            <img src={photo} className="event__photo"/>
        </div>
        <div className="event__info">
            <p className="event__name">{name}</p>
            <p className="event__organization">{organization}</p>
            <div className="event__location-block">
                <img className="event__icon-location"/>
                <p className="event__location">{location}</p>
            </div>
        </div>
        <div>
            <NavLink
                to={'/' + id}
            >
                <button className="event__btn">Show more</button>
            </NavLink>
        </div>

    </div>
);

export default Event;

