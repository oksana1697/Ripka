import User from "../User/User";
import React from "react";
import { users } from "../../reducers/users";

import "../../../styles/user.less";
import "../../styles/user-details.less";

const UserContainer = ({ users, onUserClick }) => (
    <Fragment>
        <h1 className="user-details__title"> USERS</h1>
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
