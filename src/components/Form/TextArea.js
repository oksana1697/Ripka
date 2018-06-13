import React from "react"
import "./"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"
const b = block("Form")

const TextArea = ({ input, placeholder, label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <textarea placeholder={placeholder} className={b("input", ["text"])} {...input} />
  </FieldSet>
)

export default TextArea
