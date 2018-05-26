import React from "react"
import User from "../User"

import MapContainerUsers from "../MapContainer/MapContainerUsers"

//Styles
import "./UserContainer.scss"
import block from "../../helpers/BEM"
const b = block("UserContainer")

const UserContainer = ({ users, onUserClick }) => (
  <>
    <div className={b("content")}>
      <div className={b("block")}>
        {users.map(user => <User key={user.id} {...user} onClick={() => onUserClick(user.id)} />)}
      </div>
      <MapContainerUsers users={users} />
    </div>
  </>
)

export default UserContainer
