import React from "react"
import FieldSet from "./UserFieldSet.js"
import "./UserForm.scss"
import block from "../../helpers/BEM"
const b = block("UserForm")

const UserInput = ({ input, label, type, meta }) => (
  <FieldSet label={label} meta={meta}>
    <input {...input} placeholder={label} type={type} className={b("input")} />
  </FieldSet>
)

export default UserInput
