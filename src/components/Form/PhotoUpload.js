import React from "react"
import ImageUpload from "../PhotoUpload"

import "../AddEvent/AddEvent.scss"
import block from "../../helpers/BEM"
const b = block("AddEvent")

const PhotoUpload = ({ label }) => (
  <div className={b("input")}>
    <label className={b("field")}>{label}</label>
    <ImageUpload photo={URL => this.props.change("photo", URL)} />
  </div>
)

export default PhotoUpload
