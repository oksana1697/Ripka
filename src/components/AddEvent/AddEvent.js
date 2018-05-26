import React, { Component } from 'react';
import { addEvent, addUser } from '../../actions/add';
import { connect } from 'react-redux';
//
import DateTimePicker from 'react-datetime-picker';
import PhotoUpload from '../PhotoUpload';
//
import { getIsEventProcessing } from '../../reducers/index';

import '../../styles/add.scss';
import '../../styles/common.scss';
import '../../styles/react-datetime-picker.scss';
import '../../styles/geosuggest.scss';

import NavigationAddEvent from '../Navigation/NavigationAddEvent';
import {
  alphaNumeric,
  maxLength15,
  maxLength20,
  minLength2,
  phoneNumber,
  required,
} from '../../helpers/FieldLevelValidationForm';
import { Field, reduxForm } from 'redux-form';
import Footer from '../Footer/Footer';
import GeoSuggest from '../GeoSuggest/GeoSuggest';

class AddEvent extends Component {
  static defaultProps = {
    onSuccess() {},
  };

  static getDerivedStateFromProps(
    { isEventProcessing, onSuccess },
    { formSubmitted },
  ) {
    if (formSubmitted && !isEventProcessing) {
      onSuccess();
    }
    return {};
  }

  state = {
    name: '',
    description: '',
    organization: '',
    category: '',
    contacts: '',
    time: new Date(),
    location: '',
    photo: '',
    formSubmitted: false,
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { ...event } = this.props.addEventForm.values;
    const { location } = this.state;
    const { addEvent } = this.props;
    // const {formSubmitted, ...event} = this.state;
    const fullEvent = { ...event, location };
    addEvent(fullEvent);
    this.setState({ formSubmitted: true });
    this.props.onSuccess();
  };

  changeHandler = (property, value) => {
    // ev => {
    // const {value} = ev.target;
    this.setState({ [property]: value });
    console.log('STATE', this.state);
  };
  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <input
        required
        {...input}
        placeholder={label}
        type={type}
        className="add__input"
      />
      {touched &&
        ((error && <span className="add__input_warning">{error}</span>) ||
          (warning && <span className="add__input_warning">{warning}</span>))}
    </div>
  );
  renderTime = ({ label, input }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <DateTimePicker className="add__input-time" {...input} />
    </div>
  );
  renderPhotoUpload = ({ label }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <PhotoUpload photo={URL => this.props.change('photo', URL)} />
    </div>
  );
  renderSelect = ({ label, input }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <select {...input} className="add__categories">
        <option className="add__categories" value="nonprofit">
          Nonprofit
        </option>
        <option className="add__categories" value="foot&drink">
          Food&Drink
        </option>
        <option className="add__categories" value="children">
          Children
        </option>
        <option className="add__categories" value="medicine">
          Medicine
        </option>
      </select>
    </div>
  );

  renderLocation = ({ label, input }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <div className="geosuggest__container-event">
        <GeoSuggest {...input} />
      </div>
    </div>
  );
  renderTextArea = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div className="add__input_container">
      <label className="add__field">{label}</label>
      <textarea {...input} placeholder={label} className="add__input" />
      {touched &&
        ((error && <span className="add__input_warning">{error}</span>) ||
          (warning && <span className="add__input_warning">{warning}</span>))}
    </div>
  );

  render() {
    const { formSubmitted } = this.state;
    return (
      <div>
        <NavigationAddEvent />
        <form className="add" onSubmit={this.handleSubmit}>
          {formSubmitted && <div className="add-event__carpet" />}
          <div className="add__title_container">
            <div className="add__subtitle_overview">
              <h5 className="add__subtitle_overview-grey">2.Event Details</h5>
            </div>
            <h1 className="add__title">Add event details</h1>
          </div>
          <div className="add__event_block">
            <div className="add__subtitle_container">
              <img className="add__icon_push-pin" />
              <h1 className="add__subtitle">Event Overview</h1>
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
            <Field
              name="category"
              type="select"
              label="Category"
              component={this.renderSelect}
            />
            <Field name="time" label="Time" component={this.renderTime} />
            {/*<Field*/}
            {/*name="location"*/}
            {/*label="Location"*/}
            {/*component={this.renderLocation}*/}
            {/*/>*/}
            <label className="add__input_container">
              <span className="add__field">LOCATION</span>
              <div className="geosuggest__container-event">
                <GeoSuggest
                  onChange={val => this.changeHandler('location', val)}
                />
              </div>
            </label>
            <Field
              name="contacts"
              type="text"
              label="Contacts"
              component={this.renderInput}
              validate={[required, phoneNumber, maxLength20]}
            />
            <div className="add__subtitle_container">
              <img className="add__icon_legal-paper" />
              <h1 className="add__subtitle">Event Details</h1>
            </div>
            <Field
              name="description"
              type="text"
              label="Event Description"
              component={this.renderTextArea}
              warn={alphaNumeric}
              validate={[required, minLength2]}
            />
            <Field
              name="photo"
              label="Upload Photo"
              component={this.renderPhotoUpload}
            />

            <div className="add__submit-container">
              <button className="add__submit">Add Event</button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

AddEvent = reduxForm({
  form: 'addEventForm',
})(AddEvent);

export default connect(
  state => ({
    addEventForm: state.form.addEventForm,
    isEventProcessing: getIsEventProcessing(state),
  }),
  { addEvent },
)(AddEvent);
