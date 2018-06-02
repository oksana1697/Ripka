import React from "react"

import "./Form.scss"
import block from "../../helpers/BEM"
const b = block("Form")

const Select = ({ label, input }) => (
  <div className={b("field-set")}>
    <label className={b("field")}>{label}</label>
    <select {...input} className={b("categories")}>
      <option className={b("categories")} value="nonprofit">
        Nonprofit
      </option>
      <option className={b("categories")} value="foot&drink">
        Food&Drink
      </option>
      <option className={b("categories")} value="children">
        Children
      </option>
      <option className={b("categories")} value="medicine">
        Medicine
      </option>
    </select>
  </div>
)

export default Select
