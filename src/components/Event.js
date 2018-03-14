import React from 'react';
import {NavLink} from 'react-router-dom';

const Event = ({name, description, date, location,organization}) =>
    (
        <div className="event__container">
            <div>
            <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"/>
            </div>
                <p className="event__location">{location}</p>
            {/*<p className="event__time">{date.toFormat("HH:mm")}</p>*/}
            <NavLink
                to={'/' + name}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black',
                }}
            className="event__name">
                {name}
            </NavLink>
            <p className="event__organization">{organization}</p>
        </div>
    )


export default Event






