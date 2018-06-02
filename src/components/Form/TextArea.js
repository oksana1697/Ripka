import React from "react"
import "../Form"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"
const b = block("Form")

const TextArea = ({ input, label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <textarea {...input} placeholder={label} className={b("input", ["text"])} />
  </FieldSet>
)

export default TextArea
