import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const FieldSet = ({ children, label }) => (
  <div className={b("field-set")}>
    <label className={b("label-field")}>{label}</label>
    <div className={b("input-field")}>{children}</div>
  </div>
)

export default FieldSet
