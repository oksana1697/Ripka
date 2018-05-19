import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/user.less';
import "../../../styles/common.less";
import {CLOUDINARY_URL} from "../../api/index";

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
      <img src={CLOUDINARY_URL+'w_170,h_170,c_thumb,g_faces/' + photo + '.jpg'} className="user__photo" />
        <p className="user__name">{name}</p>
        <p className="user__location">{location}</p>
      <NavLink
          to={'/users/' + id}
      >
      <button className="user__btn">Show more</button>
      </NavLink>
    </div>
  </div>
);

export default User;
