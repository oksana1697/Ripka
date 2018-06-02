import React from "react"

import "../AddEvent/AddEvent.scss"
import block from "../../helpers/BEM"
const b = block("AddEvent")

const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={b("input")}>
    <label className={b("field")}>{label}</label>
    <input {...input} placeholder={label} type={type} className={b("input_text")} />
    {touched &&
      ((error && <span className={b("input_warning")}>{error}</span>) ||
        (warning && <span className={b("input_warning")}>{warning}</span>))}
  </div>
)

export default Input
