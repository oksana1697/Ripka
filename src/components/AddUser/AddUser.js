import React, { Component } from "react"
import PhotoUpload from "../PhotoUpload"

import { Field, reduxForm } from "redux-form"
import { addUser } from "../../actions/add"
import { connect } from "react-redux"

import {
  alphaNumeric,
  maxLength20,
  minLength2,
  required,
  email_check,
  phoneNumber
} from "../../helpers/FieldLevelValidationForm"
import { getIsUserProcessing } from "../../reducers/index"

import "../../styles/add.scss"

class AddUser extends Component {
  static defaultProps = {
    onSuccess() {}
  }

  static getDerivedStateFromProps({ isUserProcessing, onSuccess }, { formSubmitted }) {
    if (formSubmitted && !isUserProcessing) {
      onSuccess()
    }
    return {}
  }

  state = {
    name: "",
    description: "",
    contacts: "",
    location: "",
    photo: "",
    interests: "",
    formSubmitted: false
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { ...user } = this.props.addUserForm.values
    const { location } = this.state
    const { addUser } = this.props
    const fullUser = { ...user, location }
    addUser(fullUser)
    this.setState({ formSubmitted: true })
    this.props.onSuccess()
  }

  changeHandler = (property, value) => {
    this.setState({ [property]: value })
  }

  renderPhotoUpload = () => (
    <div className="add__input_container-photo">
      <PhotoUpload photo={URL => this.props.change("photo", URL)} />
    </div>
  )

  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="add__user_input_container">
      <input {...input} placeholder={label} type={type} className="add__input" />
      {touched &&
        ((error && <span className="add__input_warning">{error}</span>) ||
          (warning && <span className="add__input_warning">{warning}</span>))}
    </div>
  )

  renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="add__user_input_container">
      <textarea {...input} placeholder={label} className="add__input" />
      {touched &&
        ((error && <span className="add__input_warning">{error}</span>) ||
          (warning && <span className="add__input_warning">{warning}</span>))}
    </div>
  )

  render() {
    const { invalid, pristine, submitting } = this.props
    const { formSubmitted } = this.state

    return (
      <form className="add__user" onSubmit={this.handleSubmit}>
        {formSubmitted && <div className="add-event__carpet" />}
        <div className="add__user_block">
          <div className="add__user_container">
            <h1 className="add__user_title">Join Ripka</h1>
          </div>
          <Field
            name="name"
            type="text"
            label="Name and Surname"
            component={this.renderInput}
            warn={alphaNumeric}
            validate={[required, maxLength20, minLength2]}
          />
          <div className="geosuggest__container">{/*TODO*/}</div>
          <Field
            name="email"
            type="text"
            label="Email"
            component={this.renderInput}
            validate={email_check}
          />
          <Field
            name="contacts"
            type="text"
            label="Contacts"
            component={this.renderInput}
            validate={[required, phoneNumber, maxLength20]}
          />
          <Field
            name="description"
            type="text"
            label="Description"
            component={this.renderTextArea}
            warn={alphaNumeric}
            validate={[required, minLength2]}
          />
          <Field
            name="interests"
            type="text"
            label="Interests"
            component={this.renderTextArea}
            warn={alphaNumeric}
            validate={[required, maxLength20, minLength2]}
          />
          <Field name="photo" component={this.renderPhotoUpload} />

          {/*<Field*/}
          {/*name="location"*/}
          {/*component={this.renderLocation}*/}
          {/*>*/}
          <div className="add__user_input_container">
            <button
              type="submit"
              disabled={invalid || pristine || submitting}
              className="add__user_button"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    )
  }
}

AddUser = reduxForm({
  form: "addUserForm"
})(AddUser)

export default connect(
  state => ({
    addUserForm: state.form.addUserForm,
    isUserProcessing: getIsUserProcessing(state)
  }),
  { addUser }
)(AddUser)
