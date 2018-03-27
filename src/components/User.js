import React from 'react';
import {NavLink} from 'react-router-dom';

const User = ({user_name,
                  user_description,
                  user_date,
                  user_location,
                  user_photo}) =>
    (
        <div className="event__container">
            <div>
                <img
                    src={user_photo}
                    className="event__photo"
                />
            </div>
            <p className="event__location">{user_location}</p>
            {/*<p className="event__time">{date.toFormat("HH:mm")}</p>*/}
            <NavLink
                to={'/' + user_name}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black',
                }}
                className="event__name">
                {user_name}
            </NavLink>
            {/*<p className="event__organization"></p>*/}
        </div>
    )


export default User






