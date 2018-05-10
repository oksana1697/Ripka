import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/user.less';

const User = ({
  id,
  name,
  description,
  contacts,
  interests,
  location,
  photo,
}) => (
  <div className="user__container">
    <div className="user__info-container">
      <img src={photo} className="user__photo" />
        <p className="user__name">{name}</p>
        <p className="user__location">{location}</p>
      <NavLink
          to={'users/' + id}
      >
      <button className="user__btn">Show more</button>
      </NavLink>
    </div>
  </div>
);

export default User;
