import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Form = ({ children, className = "", ...props }) => (
  <form className={b() + " " + className} {...props}>
    {children}
  </form>
)

export default Form
