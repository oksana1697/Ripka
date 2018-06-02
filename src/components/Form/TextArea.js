import React from "react"
import "../Form"
import block from "../../helpers/BEM"
const b = block("Form")

const TextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={b("field-set")}>
    <label className={b("field")}>{label}</label>
    <textarea {...input} placeholder={label} className={b("input", ["text"])} />
    {touched &&
      ((error && <span className={b("input_warning")}>{error}</span>) ||
        (warning && <span className={b("input_warning")}>{warning}</span>))}
  </div>
)

export default TextArea
