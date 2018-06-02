import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const FieldSet = ({ children, label, meta = {} }) => (
  <div className={b("field-set")}>
    <label className={b("label-field")}>{label}</label>
    <div className={b("input-field")}>
      {children}

      {(meta.touched && //prettier-ignore
        (meta.error && <span className={b("error")}>{meta.error}</span>)) ||
      (meta.warning && <span className={b("warning")}>{meta.warning}</span>)}
    </div>
  </div>
)

export default FieldSet
