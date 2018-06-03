import React from "react"
import ImageUpload from "../PhotoUpload"
import FieldSet from "./UserFieldSet"

const UserPhotoUpload = ({ label, meta }) => (
  <FieldSet label={label} meta={meta}>
    <ImageUpload photo={URL => this.props.change("photo", URL)} />
  </FieldSet>
);

export default UserPhotoUpload
