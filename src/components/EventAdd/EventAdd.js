import React from "react"
import { connect } from "react-redux"
import { compose } from "ramda"
import { Field, reduxForm } from "redux-form"
import { maxLength, minLength, required } from "../../helpers/FieldLevelValidationForm"
//
import { addEvent } from "../../actions/add"
//
import Geocoder from "../Geocoder"
import Form from "../Form"
//
import "./EventAdd.scss"
import "../../styles/react-datetime-picker.scss"
import block from "../../helpers/BEM"
import { withRouter } from "react-router-dom"

const b = block("EventAdd")

export const EventAdd = ({ handleSubmit, submitting, id }) => (
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

export default compose(
  withRouter,
  connect(null, { processEvent: addEvent }),

  reduxForm({
    // initialValues: {
    //   name: "Повстання роботів",
    //   organization: "Skynet",
    //   location: "Жмеринка",
    //   time: new Date(),
    //   photo: "terminator-2-terminator-t-800-endoskeleton-maquette-sideshow-300157-01_mwmdru",
    //   description: "Настав день помсти! Шкіряні ублюдки!!",
    //   contacts: "we_are_killing_humans@skynet.com"
    // },
    form: "addEventForm",
    onSubmit: async (data, dispatch, { processEvent, history }) => {
      const action = await processEvent(data)
      history.push("/events/" + action.id)
    }
  })
)(EventAdd)
