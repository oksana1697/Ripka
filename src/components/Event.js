import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/event.less";

const Event = ({
  id,
  name,
  description,
  date,
  location,
  organization,
  photo
}) => (
  <div className="event__container">
    <div>
      <img src={photo} className="event__photo" />
    </div>
    <p className="event__location">{location}</p>
    {/*<p className="event__time">{date.toFormat("HH:mm")}</p>*/}
    <NavLink
      to={"/" + id}
      activeStyle={{
        textDecoration: "none",
        color: "black"
      }}
      className="event__name"
    >
      {name}
    </NavLink>
    <p className="event__organization">{organization}</p>
  </div>
);

export default Event;
