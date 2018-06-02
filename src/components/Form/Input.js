import React from "react"
import FieldSet from "./FieldSet.js"
import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FieldSet label={label}>
    <input {...input} placeholder={label} type={type} className={b("input")} />
    {touched &&
      ((error && <span className={b("warning")}>{error}</span>) ||
        (warning && <span className={b("warning")}>{warning}</span>))}
  </FieldSet>
)

export default Input
