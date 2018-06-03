import React from "react"

import "./UserForm.scss"
import block from "../../helpers/BEM"
const b = block("UserForm")

const UserForm = ({ children, className = "", ...props }) => (
  <form className={b() + " " + className} {...props}>
    {children}
  </form>
)

export default UserForm
