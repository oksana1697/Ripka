import React from "react"
import { connect } from "react-redux"
import { compose } from "ramda"
import { Field, reduxForm } from "redux-form"
import { maxLength, minLength, phoneNumber, required } from "../../helpers/FieldLevelValidationForm"
//
import { getIsEventProcessing } from "../../reducers/index"
import { addEvent } from "../../actions/add"
//
import Geocoder from "../Geocoder"
import Form from "../Form"
//
import "./AddEvent.scss"
import "../../styles/react-datetime-picker.scss"
import block from "../../helpers/BEM"
const b = block("AddEvent")

const AddEvent = ({ handleSubmit, submitting }) => (
  <Form className={b()} onSubmit={handleSubmit}>
    {submitting && <div className={b("carpet")} />}
    <header>
      <h1 className={b("title", ["text"])}>
        <span className={b("breadcrumb")}>
          <span className={b("breadcrumb-link")}>Job details</span>
          <span className={b("breadcrumb-link")}>Event Details</span>
        </span>
        Add event details
      </h1>

      <h2 className={b("title", ["sub-navigation"])}>
        <span className={b("icon", ["push-pin"])} />
        Event Overview
      </h2>
    </header>

    <Field name="name" label="Event Name" component={Form.Input} validate={[required, maxLength(20), minLength(2)]} />
    <Field
      name="organization"
      label="Organization Name"
      component={Form.Input}
      validate={[required, maxLength(15), minLength(2)]}
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

    <Field name="contacts" label="Contacts" component={Form.Input} validate={[required, phoneNumber, maxLength(20)]} />

    <div className={b("title_sub-navigation")}>
      <span className={b("title_sub-navigation_icon-legal-paper")} />
      <h1 className={b("title_chapter")}>Event Details</h1>
    </div>

    <Field name="description" label="Event Description" component={Form.TextArea} validate={[required, minLength]} />

    <Field name="photo" label="Upload Photo" component={Form.PhotoUpload} />

    <Form.FieldSet>
      <Form.Button>Add Event</Form.Button>
    </Form.FieldSet>
  </Form>
)

export default compose(
  connect(
    state => ({
      addEventForm: state.form.addEventForm,
      isEventProcessing: getIsEventProcessing(state)
    }),
    { addEvent }
  ),
  reduxForm({
    form: "addEventForm",
    onSubmit(data) {
      console.log(data)
    }
  })
)(AddEvent)
