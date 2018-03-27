import User from './User'
import React from 'react';
import AddEvent from '../containers/AddEvent'


import { users } from '../reducers/users'
import Cover from "./Cover";

const UserContainer = ({users, onUserClick}) => (

    <ul>
        <Cover/>
        <div className="event__block">
            {
                users.map(user =>
                    <User
                        key={user.id}
                        {...user}
                        onClick={() => onUserClick(user.id)}
                    />
                )
            }
        </div>

    </ul>

)

export default UserContainer






