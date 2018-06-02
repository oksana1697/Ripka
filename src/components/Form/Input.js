import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={b("field-set")}>
    <label className={b("field")}>{label}</label>
    <input {...input} placeholder={label} type={type} className={b("input")} />
    {touched &&
      ((error && <span className={b("warning")}>{error}</span>) ||
        (warning && <span className={b("warning")}>{warning}</span>))}
  </div>
)

export default Input
