import React from "react"
import ImageUpload from "../PhotoUpload"
import FieldSet from "./FieldSet"

const PhotoUpload = ({ input, label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <ImageUpload input={input} photo={URL => this.props.change("photo", URL)} />
  </FieldSet>
)

export default PhotoUpload
