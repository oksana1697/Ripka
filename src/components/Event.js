import React from 'react';
import {NavLink} from 'react-router-dom';

const Event = ({name, description, date, location,organization,photo}) =>
    (
        <div className="event__container">
            <div>
            <img src={photo}/>
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






