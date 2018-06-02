import React from "react"
import DateTimePicker from "react-datetime-picker"

import "../AddEvent/AddEvent.scss"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"

const b = block("Form")

const Time = ({ label, input }) => (
  <FieldSet label={label}>
    <DateTimePicker className={b("input_time")} {...input} />
  </FieldSet>
)

export default Time
