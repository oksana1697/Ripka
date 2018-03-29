import React from 'react';
import {NavLink} from 'react-router-dom';
import {addEvent} from "../actions";
import {deleteEvent} from "../api";

const Event = ({id,name, description, date, location,organization,photo}) =>

    (
        <div className="event__container">
            <div>
            <img
                src={photo}
                className="event__photo"
            />
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

           {/*<button className="add-event__submit" onClick={() => {*/}
           {/*console.log("deleting")}}*/}
           {/*>*/}
           {/*</button>*/}
        </div>
    )


export default Event






