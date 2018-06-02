import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "ramda"
import { Field, reduxForm } from "redux-form"
import { maxLength, minLength, phoneNumber, required } from "../../helpers/FieldLevelValidationForm"
//
import { getIsEventProcessing } from "../../reducers/index"
import { addEvent } from "../../actions/add"
//
import Geocoder from "../Geocoder"
import DateTimePicker from "react-datetime-picker"
import Form from "../Form"
//
import "./AddEvent.scss"
import "../../styles/react-datetime-picker.scss"
import block from "../../helpers/BEM"
const b = block("AddEvent")

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

  state = { formSubmitted: false }

  renderTime = ({ label, input }) => (
    <div className={b("input")}>
      <label className={b("field")}>{label}</label>
      <DateTimePicker className={b("input_time")} {...input} />
    </div>
  )

  render() {
    const { handleSubmit } = this.props
    const { formSubmitted } = this.state

    return (
      <form onSubmit={handleSubmit}>
        {formSubmitted && <div className={b("carpet")} />}
        <div className={b("title")}>
          <div className={b("title_chapter")}>
            <h5 className={b("title_chapter_text")}>2.Event Details</h5>
          </div>
          <h1 className={b("title_text")}>Add event details</h1>
        </div>

        <div className={b("title_sub-navigation")}>
          <span className={b("title_sub-navigation_icon-push-pin")} />
          <h1 className={b("title_chapter")}>Event Overview</h1>
        </div>

        <Field
          name="name"
          type="text"
          label="Event Name"
          component={Form.Input}
          validate={[required, maxLength(20), minLength(2)]}
        />
        <Field
          name="organization"
          type="text"
          label="Organization Name"
          component={Form.Input}
          validate={[required, maxLength(15), minLength(2)]}
        />
        <Field name="category" type="select" label="Category" component={Form.Select} />
        <Field name="time" label="Time" component={this.renderTime} />

        <div className={b("input")}>
          <label className={b("field")}>Location</label>
          <Geocoder />
        </div>

        <Field
          name="contacts"
          type="text"
          label="Contacts"
          component={Form.Input}
          validate={[required, phoneNumber, maxLength(20)]}
        />

        <div className={b("title_sub-navigation")}>
          <span className={b("title_sub-navigation_icon-legal-paper")} />
          <h1 className={b("title_chapter")}>Event Details</h1>
        </div>

        <Field
          name="description"
          type="text"
          label="Event Description"
          component={Form.TextArea}
          validate={[required, minLength]}
        />

        <Field name="photo" label="Upload Photo" component={Form.PhotoUpload} />

        <div className={b("submit")}>
          <button className={b("submit_button")}>Add Event</button>
        </div>
      </form>
    )
  }
}

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
