import React from "react"
import { NavLink } from "react-router-dom"

import "../../styles/event.scss"
import "../../styles/common.scss"
import { CLOUDINARY_URL } from "../../api/index"

/**
 * Represents view of single Event
 */
const Event = ({ id, name, description, date, location, organization, photo }) => (
  <div className="event__container ">
    <div>
      <img alt={name} src={`${CLOUDINARY_URL}w_80,h_80,c_fill,q_90/${photo}.jpg`} className="event__photo" />
    </div>
    <div className="event__info">
      <p className="event__name">{name}</p>
      <p className="event__organization">{organization}</p>
      <div className="event__location-container">
        <span className="event__icon-location" />
        <p className="event__location">{location}</p>
      </div>
    </div>
    <div>
      <NavLink to={"/events/" + id}>
        <button className="event__btn-details">Show more</button>
      </NavLink>
    </div>
  </div>
)

export default Event
