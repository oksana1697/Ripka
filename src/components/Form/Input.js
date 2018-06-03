import React from "react"
import FieldSet from "./FieldSet.js"
import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Input = ({ input, placeholder, label, type, meta }) => (
  <FieldSet label={label} meta={meta}>
    <input {...input} placeholder={placeholder} type={type} className={b("input")} />
  </FieldSet>
)

export default Input
