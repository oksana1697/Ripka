import React from "react"

import "./UserForm.scss"
import block from "../../helpers/BEM"
const b = block("UserForm")

const UserButton = ({ children, ...props }) => (
  <button className={b("button")} {...props}>
    {children}
  </button>
)

export default UserButton
