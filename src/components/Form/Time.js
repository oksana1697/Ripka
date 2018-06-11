import React from "react"
import DateTimePicker from "react-datetime-picker"

import "../EventAdd/EventAdd.scss"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"

const b = block("Form")

const Time = ({ label, input, meta }) => (
  <FieldSet label={label} meta={meta}>
    <DateTimePicker className={b("input_time")} {...input} />
  </FieldSet>
)

export default Time