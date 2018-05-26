import User from "../User/User";
import {users} from "../../reducers/users";
import React, {Fragment} from "react";

import "../../styles/user.scss";
import "../../styles/user-details.scss";
import "../../styles/common.scss";
import "../../styles/map.scss"

import MapContainerUsers from "../MapContainer/MapContainerUsers";

const UserContainer = ({users, onUserClick}) => (
    <Fragment>
        <div className='user__subnav'>
            <button className='user__signUp'>Sign up</button>
            <span className='user__divider'></span>
            <button className='user__logIn'>Log in</button>
        </div>
        <h1 className="user-details__title"> Users</h1>
        <div className="user__content">
            <div className="user__block">
                {users.map(user => (
                    <User
                        key={user.id}
                        {...user}
                        onClick={() => onUserClick(user.id)}
                    />
                ))}
            </div>
            <MapContainerUsers users={users}/>
        </div>
    </Fragment>
);


export default UserContainer;
