import React from "react";
import {NavLink} from "react-router-dom";

import "../../../styles/user.less";

const User = ({
                  id,
                  name,
                  description,
                  contacts,
                  interests,
                  location,
                  photo
              }) => (
    <div className="user__container">
        <NavLink
            to={"users/" + id}
            activeStyle={{
                textDecoration: "none",
                color: "black"
            }}
            className="user__name"
        >
            {name}
        </NavLink>
        <div className="user__info-container">
            <img src={photo} className="user__photo"/>
            <div className="user__info">
                <p className="user__contacts">{contacts}</p>
                <p className="user__location">{location}</p>
            </div>
        </div>
    </div>
);

export default User;