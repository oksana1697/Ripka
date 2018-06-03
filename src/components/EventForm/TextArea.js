import React from "react"
import "./"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"
const b = block("Form")

const TextArea = ({ input, label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <textarea placeholder={label} className={b("input", ["text"])} {...input} />
  </FieldSet>
)

export default TextArea