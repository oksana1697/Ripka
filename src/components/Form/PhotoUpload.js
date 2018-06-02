import React from "react"
import ImageUpload from "../PhotoUpload"

import "../Form"
import block from "../../helpers/BEM"
const b = block("Form")

const PhotoUpload = ({ label }) => (
  <div className={b("field-set")}>
    <label className={b("field")}>{label}</label>
    <ImageUpload photo={URL => this.props.change("photo", URL)} />
  </div>
)

export default PhotoUpload
