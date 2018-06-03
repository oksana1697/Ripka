import React from "react"
import "./"
import block from "../../helpers/BEM"
import UserFieldSet from "./UserFieldSet"
const b = block("UserForm")

const UserTextArea = ({ input, label, meta }) => (
  <UserFieldSet label={label} meta={meta}>
    <textarea placeholder={label} className={b("input")} {...input} />
  </UserFieldSet>
)

export default UserTextArea
