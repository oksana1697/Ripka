import React from "react"
import { NavLink } from "react-router-dom"

import "../../styles/user.scss"
import "../../styles/common.scss"
import { CLOUDINARY_URL } from "../../api/index"

const User = ({ id, name, description, contacts, interests, location, photo }) => (
  <div className="user__container">
    <div className="user__info-container">
      <img
        alt=""
        src={`${CLOUDINARY_URL}w_80,h_80,q_90,c_thumb,g_faces/${photo}.jpg`}
        className="user__photo"
      />
      <p className="user__name">{name}</p>
      <p className="user__location">{location}</p>
      <NavLink to={"/users/" + id}>
        <button className="user__btn">Show more</button>
      </NavLink>
    </div>
  </div>
)

export default User
