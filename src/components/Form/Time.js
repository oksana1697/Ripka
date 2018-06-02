import React from "react"
import DateTimePicker from "react-datetime-picker"

import "../AddEvent/AddEvent.scss"
import block from "../../helpers/BEM"

const b = block("Form")

const Time = ({ label, input }) => (
  <div className={b("field-set")}>
    <label className={b("field")}>{label}</label>
    <DateTimePicker className={b("input_time")} {...input} />
  </div>
)

export default Time
