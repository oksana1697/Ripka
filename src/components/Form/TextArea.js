import React from "react"
import "../AddEvent/AddEvent.scss"
import block from "../../helpers/BEM"
const b = block("AddEvent")

const TextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={b("input")}>
    <label className={b("field")}>{label}</label>
    <textarea {...input} placeholder={label} className={b("input_text")} />
    {touched &&
      ((error && <span className={b("input_warning")}>{error}</span>) ||
        (warning && <span className={b("input_warning")}>{warning}</span>))}
  </div>
)

export default TextArea
