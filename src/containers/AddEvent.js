import React, { Component } from "react";
import { addEvent } from "../actions/index";
import { connect } from "react-redux";
//
import DateTimePicker from "react-datetime-picker";
import PhotoUpload from "../components/PhotoUpload";
//
import { getIsEventProcessing } from "../reducers";

import "../../styles/add-event.less";

class AddEvent extends Component {
  static defaultProps = {
    onSuccess() {}
  };

  static getDerivedStateFromProps(
    { isEventProcessing, onSuccess },
    { formSubmitted }
  ) {
    if (formSubmitted && !isEventProcessing) {
      onSuccess();
    }
    return {};
  }

  state = {
    name: "",
    description: "",
    organization: "",
    contacts: "",

    time: new Date(),

    location: "",
    photo: "",
    formSubmitted: false
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const { addEvent } = this.props;
    const { formSubmitted, ...event } = this.state;

    //TODO: verify data;

    addEvent(event);
    this.setState({ formSubmitted: true });
  };

  changeHandler = property => ev => {
    const { value } = ev.target;
    this.setState({ [property]: value });
  };

  render() {
    const {
      name,
      description,
      organization,
      contacts,
      time,
      location,
      formSubmitted
    } = this.state;

    return (
      <form className="add-event" onSubmit={this.handleSubmit}>
        {formSubmitted && <div className="add-event__carpet" />}
        <div className="add-event__title_container">
          <h1 className="add-event__title">Add event details</h1>
        </div>
        <div className="add-event__subtitle_container">
          <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
          <h1 className="add-event__subtitle">Event Overview</h1>
        </div>

        <label className="add-event__input_container">
          <span className="add-event__field">Event name</span>
          <input
            className="add-event__input"
            placeholder="Event Name"
            value={name}
            onChange={this.changeHandler("name")}
          />
        </label>
        <label className="add-event__input_container">
          <span className="add-event__field">ORGANIZATION NAME</span>
          <input
            className="add-event__input"
            placeholder="Organization Name"
            value={organization}
            onChange={this.changeHandler("organization")}
          />
        </label>
        <label className="add-event__input_container">
          <span className="add-event__field">LOCATION</span>
          <input
            className="add-event__input"
            placeholder="Location"
            value={location}
            onChange={this.changeHandler("location")}
          />
        </label>
        <label className="add-event__input_container">
          <span className="add-event__field">CONTACTS</span>
          <input
            className="add-event__input"
            placeholder="Contacts"
            value={contacts}
            onChange={this.changeHandler("contacts")}
          />
        </label>

        <label className="add-event__input_container">
          <span className="add-event__field">
            EVENT DESCRIPTION & REQUIREMENTS
          </span>
          <textarea
            className="add-event__textarea"
            placeholder="Description"
            value={description}
            onChange={this.changeHandler("description")}
            required
          />
        </label>

        <label className="add-event__input_container">
          <span className="add-event__field">Time</span>
          <DateTimePicker
            value={time}
            onChange={time => this.setState({ time })}
          />
        </label>

        <label className="add-event__input_container">
          <span className="add-event__field">DOWNLOAD PHOTO</span>
          <PhotoUpload photo={URL => this.setState({ photo: URL })} />
        </label>

        <div className="add-event__submit-container">
          <button className="add-event__submit">Add Event</button>
        </div>
      </form>
    );
  }
}

const checkField = array1 => {
  for (let i in array1) {
    if (array1[i] === "") {
      alert("Please fill mandatory fields!");
      return true;
    }
    return true;
  }
};

export default connect(
  state => ({
    isEventProcessing: getIsEventProcessing(state)
  }),
  { addEvent }
)(AddEvent);
