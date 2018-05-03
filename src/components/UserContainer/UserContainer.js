import User from "../User/User";
import { users } from "../../reducers/users";
import React, { Fragment } from "react";

import "../../../styles/user.less";
import "../../../styles/user-details.less";

const UserContainer = ({ users, onUserClick }) => (
    <Fragment>
        <h1 className="user-details__title user-details__title_main"> USERS</h1>
        <div className="user__block">
            {users.map(user => (
                <User
                    key={user.id}
                    {...user}
                    onClick={() => onUserClick(user.id)}
                />
            ))}
        </div>
    </Fragment>
);


export default UserContainer;
