import React from "react"
import { CLOUDINARY_URL } from "../../api/index"
import { Link } from "react-router-dom"

import "./User.scss"
import block from "../../helpers/BEM"
const b = block("User")

const User = ({ id, name, description, contacts, interests, location, photo }) => (
  <div className={b()}>
    <img alt={name} src={`${CLOUDINARY_URL}r_100,w_80,h_80,q_90,c_thumb,g_faces/${photo}.jpg`} className={b("photo")}/>
    <h3 className={b("name")}>
      <Link to={"/users/" + id}>{name}</Link>
    </h3>
    <p className={b("location")}>{location}</p>
  </div>
)

export default User
