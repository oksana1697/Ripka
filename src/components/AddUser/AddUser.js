import React, { Component } from "react"
import PhotoUpload from "../PhotoUpload/PhotoUpload"

import { Field, reduxForm } from "redux-form"
import { addUser } from "../../actions/add"
import { connect } from "react-redux"

import {
  alphaNumeric,
  maxLength,
  required,
  email_check,
  phoneNumber,
  minLength
} from "../../helpers/FieldLevelValidationForm"
import { getIsUserProcessing } from "../../reducers/index"

import "../AddUser/AddUser.scss"

import block from "../../helpers/BEM"

const b = block("AddUser")

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
    <div className={b("photo-upload")}>
      <PhotoUpload photo={URL => this.props.change("photo", URL)} />
    </div>
  )

  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={b("input")}>
      <input {...input} placeholder={label} type={type} className={b("input_text")} />
      {touched &&
        ((error && <span className={b("input_warning")}>{error}</span>) ||
          (warning && <span className={b("input_warning")}>{warning}</span>))}
    </div>
  )

  renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={b("input")}>
      <textarea {...input} placeholder={label} className={b("input_text")} />
      {touched &&
        ((error && <span className={b("input_warning")}>{error}</span>) ||
          (warning && <span className={b("input_warning")}>{warning}</span>))}
    </div>
  )

  render() {
    const { invalid, pristine, submitting } = this.props
    const { formSubmitted } = this.state

    return (
      <form className={b("container")} onSubmit={this.handleSubmit}>
        {formSubmitted && <div className={b("carpet")} />}
        <div className={b("title")}>
          <div className={b("title_container")}>
            <h1 className={b("title_text")}>Join Ripka</h1>
          </div>
          <Field
            name="name"
            type="text"
            label="Name and Surname"
            component={this.renderInput}
            warn={alphaNumeric}
            validate={[required, maxLength(20), minLength(2)]}
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
            validate={[required, phoneNumber, maxLength(20)]}
          />
          <Field
            name="description"
            type="text"
            label="Description"
            component={this.renderTextArea}
            warn={alphaNumeric}
            validate={[required, minLength(2)]}
          />
          <Field
            name="interests"
            type="text"
            label="Interests"
            component={this.renderTextArea}
            warn={alphaNumeric}
            validate={[required, maxLength(20), minLength(2)]}
          />
          <Field name="photo" component={this.renderPhotoUpload} />

          {/*<Field*/}
          {/*name="location"*/}
          {/*component={this.renderLocation}*/}
          {/*>*/}
          <div className={b("input")}>
            <button
              type="submit"
              disabled={invalid || pristine || submitting}
              className={b("button")}
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
