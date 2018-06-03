import React from "react"
import { Link } from "react-router-dom"
import { CLOUDINARY_URL } from "../../api/index"

//Styles
import "./Event.scss"
import block from "../../helpers/BEM"
const b = block("Event")

const Event = ({ id, name, description, date, location, organization, photo }) => (
  <div className={b()}>
    <img alt={name} src={`${CLOUDINARY_URL}w_80,h_80,c_fill,q_90/${photo}.jpg`} className={b("photo")} />
    <div className={b("description")}>
      <h3 className={b("title")}>
        <Link to={"/events/" + id}>{name}</Link>
      </h3>
      <p className={b("organization")}>{organization}</p>
      <p className={b("location-container")}>
        <span className={b("icon-location")} />
        <span className={b("location")}>{location}</span>
      </p>
    </div>
  </div>
)

export default Event
