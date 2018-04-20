import React from 'react';
import {NavLink} from 'react-router-dom';

import "../../styles/user.less"

const User = ({
                  user_name,
                  user_description,
                  user_contacts,
                  user_location,
                  user_photo
              }) =>
    (
        <div className="user__container">
            <NavLink
                to={'/' + user_name}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black',
                }}
                className="user__name">
                {user_name}
            </NavLink>
            <div className='user__info-container'>
                <img
                    src={user_photo}
                    className="user__photo"
                />
                <div className='user__info'>
                    <p className="user__contacts">{user_contacts}</p>
                    <p className="user__location">{user_location}</p>
                </div>
            </div>
        </div>
    );


export default User






