import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Button = ({ children, ...props }) => (
  <button className={b("button")} {...props}>
    {children}
  </button>
)

export default Button
