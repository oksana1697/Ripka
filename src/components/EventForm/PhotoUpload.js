import React from "react"
import ImageUpload from "../PhotoUpload"
import FieldSet from "./FieldSet"

const PhotoUpload = ({ label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <ImageUpload photo={URL => this.props.change("photo", URL)} />
  </FieldSet>
);

export default PhotoUpload
