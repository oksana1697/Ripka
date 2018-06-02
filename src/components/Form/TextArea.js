import React from "react"
import "../Form"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"
const b = block("Form")

const TextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FieldSet label={label}>
    <textarea {...input} placeholder={label} className={b("input", ["text"])} />
    {touched &&
      ((error && <span className={b("input_warning")}>{error}</span>) ||
        (warning && <span className={b("input_warning")}>{warning}</span>))}
  </FieldSet>
)

export default TextArea
