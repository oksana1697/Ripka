import React, { Component } from "react"
import { addEvent } from "../../actions/add"
import { connect } from "react-redux"
//
import DateTimePicker from "react-datetime-picker"
import PhotoUpload from "../PhotoUpload/PhotoUpload"
//
import { getIsEventProcessing } from "../../reducers/index"

import "./AddEvent.scss"
import "../../styles/react-datetime-picker.scss"

import Geocoder from "../Geocoder"

import {
  alphaNumeric,
  maxLength15,
  maxLength20,
  minLength2,
  phoneNumber,
  required
} from "../../helpers/FieldLevelValidationForm"
import { Field, reduxForm } from "redux-form"

import block from '../../helpers/BEM'

const b = block('AddEvent')

class AddEvent extends Component {
  static defaultProps = {
    onSuccess() {}
  }

  static getDerivedStateFromProps({ isEventProcessing, onSuccess }, { formSubmitted }) {
    if (formSubmitted && !isEventProcessing) {
      onSuccess()
    }
    return {}
  }

  state = {
    name: "",
    description: "",
    organization: "",
    category: "",
    contacts: "",
    time: new Date(),
    location: "",
    photo: "",
    formSubmitted: false
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { ...event } = this.props.addEventForm.values
    const { location } = this.state
    const { addEvent } = this.props

    const fullEvent = { ...event, location }

    addEvent(fullEvent)
    this.setState({ formSubmitted: true })
    this.props.onSuccess()
  }

  changeHandler = (property, value) => {
    this.setState({ [property]: value })
  }
  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={b('input')}>
      <label className={b('field')}>{label}</label>
      <input required {...input} placeholder={label} type={type} className={b('input_text')} />
      {touched &&
        ((error && <span className={b('input_warning')}>{error}</span>) ||
          (warning && <span className={b('input_warning')}>{warning}</span>))}
    </div>
  )
  renderTime = ({ label, input }) => (
      <div className={b('input')}>
          <label className={b('field')}>{label}</label>
        <DateTimePicker className={b('input_time')} {...input} />
    </div>
  )
  renderPhotoUpload = ({ label }) => (
      <div className={b('input')}>
          <label className={b('field')}>{label}</label>
        <PhotoUpload photo={URL => this.props.change("photo", URL)} />
    </div>
  )
  renderSelect = ({ label, input }) => (
      <div className={b('input')}>
          <label className={b('field')}>{label}</label>
        <select {...input} className={b('categories')}>
        <option className={b('categories')} value="nonprofit">
          Nonprofit
        </option>
        <option className={b('categories')} value="foot&drink">
          Food&Drink
        </option>
        <option className={b('categories')} value="children">
          Children
        </option>
        <option className={b('categories')} value="medicine">
          Medicine
        </option>
      </select>
    </div>
  )

  renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div className={b('input')}>
      <label className={b('field')}>{label}</label>
      <textarea {...input} placeholder={label} className={b('input_text')}/>
      {touched &&
      ((error && <span className={b('input_warning')}>{error}</span>) ||
          (warning && <span className={b('input_warning')}>{warning}</span>))}
    </div>
  )

  render() {
    const { formSubmitted } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {formSubmitted && <div className={b('carpet')} />}
          <div className={b('title')}>
            <div className={b('title_chapter')}>
              <h5 className={b('title_chapter_text')}>2.Event Details</h5>
            </div>
            <h1
>Add event details</h1>
          </div>
            <div className={b('title_sub-navigation')}>
              <span className={b('title_sub-navigation_icon-push-pin')} />
              <h1 className={b('title_chapter')}>Event Overview</h1>
            </div>
            <Field
              name="name"
              type="text"
              label="Event Name"
              component={this.renderInput}
              warn={alphaNumeric}
              validate={[required, maxLength20, minLength2]}
            />
            <Field
              name="organization"
              type="text"
              label="Organization Name"
              component={this.renderInput}
              warn={alphaNumeric}
              validate={[required, maxLength15, minLength2]}
            />
            <Field name="category" type="select" label="Category" component={this.renderSelect} />
            <Field name="time" label="Time" component={this.renderTime} />

            <Geocoder />

            <Field
              name="contacts"
              type="text"
              label="Contacts"
              component={this.renderInput}
              validate={[required, phoneNumber, maxLength20]}
            />

              <div className={b('title_sub-navigation')}>
                  <span className={b('title_sub-navigation_icon-legal-paper')} />
                  <h1 className={b('title_chapter')}>Event Details</h1>
              </div>
            <Field
              name="description"
              type="text"
              label="Event Description"
              component={this.renderTextArea}
              warn={alphaNumeric}
              validate={[required, minLength2]}
            />
            <Field name="photo" label="Upload Photo" component={this.renderPhotoUpload} />

            <div className={b('submit')}>
              <button className={b('submit_button')}>Add Event</button>
            </div>
          {/*</div>*/}
        </form>
      </>
    )
  }
}

AddEvent = reduxForm({
  form: "addEventForm"
})(AddEvent)

export default connect(
  state => ({
    addEventForm: state.form.addEventForm,
    isEventProcessing: getIsEventProcessing(state)
  }),
  { addEvent }
)(AddEvent)
