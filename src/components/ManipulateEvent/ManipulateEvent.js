import React from "react"
import { maxLength, minLength, required } from "../../helpers/FieldLevelValidationForm"

import { Field} from "redux-form"
import Form from "../Form"
import Geocoder from "../Geocoder"

import "./ManipulateEvent.scss"
import "../../styles/react-datetime-picker.scss"
import block from "../../helpers/BEM"

const b = block("ManipulateEvent")

export const ManipulateEvent = ({ handleSubmit, submitting, id }) => (
  <Form className={b()} onSubmit={handleSubmit}>
    {submitting && <div className={b("carpet")} />}
    <header>
      <h1 className={b("title", ["text"])}>
        <span className={b("breadcrumb")}>
          <span className={b("breadcrumb-link")}>Job details</span>
          <span className={b("breadcrumb-link")}>Event Details</span>
        </span>
        {id ? "Edit event" : "Add event"}
      </h1>

      <h2 className={b("title", ["sub-navigation"])}>
        <span className={b("icon", ["push-pin"])} />
        Event Overview
      </h2>
    </header>

    <Field name="name" label="Event Name" component={Form.Input} validate={[required, maxLength(100), minLength(2)]} />
    <Field
      name="organization"
      label="Organization Name"
      component={Form.Input}
      validate={[required, maxLength(100), minLength(2)]}
    />
    <Field name="category" type="select" label="Category" component={Form.Select} />
    <Field name="time" label="Time" component={Form.Time} />

    <Field
      name="location"
      component={() => (
        <Form.FieldSet label={"Location"}>
          <Geocoder />
        </Form.FieldSet>
      )}
    />

    <Field name="contacts" label="Contacts" component={Form.Input} validate={[required, maxLength(100)]} />

    <h2 className={b("title", ["sub-navigation"])}>
      <span className={b("icon", ["legal-paper"])} />
      Event Details
    </h2>

    <Field
      name="description"
      label="Event Description"
      component={Form.TextArea}
      validate={[required, minLength(20)]}
    />

    <Field name="photo" label="Upload Photo" component={Form.PhotoUpload} />

    <Form.FieldSet>
      <Form.Button>{id ? "Edit event" : "Add event"}</Form.Button>
    </Form.FieldSet>
  </Form>
)

export default ManipulateEvent
