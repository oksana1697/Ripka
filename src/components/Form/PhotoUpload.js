import React from "react"
import ImageUpload from "../PhotoUpload"

import "../Form"
import block from "../../helpers/BEM"
import FieldSet from "./FieldSet"
const b = block("Form")

const PhotoUpload = ({ label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <ImageUpload photo={URL => this.props.change("photo", URL)} />
  </FieldSet>
)

export default PhotoUpload
