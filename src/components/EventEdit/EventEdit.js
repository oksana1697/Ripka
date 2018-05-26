import React, { Component } from "react"

import { connect } from "react-redux"
import { getIsEventProcessing, getIsEventFetching } from "../../reducers/index"
import { editEvent } from "../../actions/edit"
import { getEventById } from "../../reducers/events"
import { fetchEvent } from "../../actions/fetch"
import Navigation from "../Navigation/Navigation"
import PhotoUpload from "../PhotoUpload"

import "../../styles/add.scss"
import { CLOUDINARY_URL } from "../../api/index"

class EventEdit extends Component {
  constructor(props) {
    super(props)
    const initState = {
      name: "",
      description: "",
      organization: "",
      contacts: "",
      time: new Date(),
      location: "",
      photo: "",
      formSubmitted: false
    }
    this.state = this.props.event ? this.props.event : initState
  }

  static defaultProps = {
    onSuccess() {}
  }

  static getDerivedStateFromProps({ event, isEventProcessing, onSuccess }, { formSubmitted }) {
    if (formSubmitted && !isEventProcessing) {
      onSuccess()
    }
    return event
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { editEvent, id } = this.props
    const { formSubmitted, ...event } = this.state
    editEvent(event, id)
    this.setState({ formSubmitted: true })
  }

  changeHandler = property => ev => {
    const { value } = ev.target
    this.setState({ [property]: value })
  }

  render() {
    const { name, description, organization, contacts, location, photo, formSubmitted } = this.state
    return (
      <div>
        <Navigation />

        <form className="add" onSubmit={this.handleSubmit}>
          {formSubmitted && <div className="add__carpet" />}
          <div className="add__title_container">
            <h1 className="add__title">Edit event details</h1>
          </div>
          <div className="add__subtitle_container">
            <img alt="" src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
            <h1 className="add__subtitle">Event Overview</h1>
          </div>

          <label className="add__input_container">
            <span className="add__field">Event name</span>
            <input
              className="add__input"
              placeholder="Event Name"
              value={name}
              onChange={this.changeHandler("name")}
            />
          </label>
          <label className="add__input_container">
            <span className="add__field">ORGANIZATION NAME</span>
            <input
              className="add__input"
              placeholder="Organization Name"
              value={organization}
              onChange={this.changeHandler("organization")}
            />
          </label>
          <label className="add__input_container">
            <span className="add__field">LOCATION</span>
            <input
              className="add__input"
              placeholder="Location"
              value={location}
              onChange={this.changeHandler("location")}
            />
          </label>
          <label className="add__input_container">
            <span className="add__field">CONTACTS</span>
            <input
              className="add__input"
              placeholder="Contacts"
              value={contacts}
              onChange={this.changeHandler("contacts")}
            />
          </label>

          <label className="add__input_container">
            <span className="add__field">EVENT DESCRIPTION & REQUIREMENTS</span>
            <textarea
              className="add__textarea"
              placeholder="Description"
              value={description}
              onChange={this.changeHandler("description")}
              required
            />
          </label>

          <label className="add__input_container">
            <span className="add__field">DOWNLOAD PHOTO</span>
            <img alt="" src={`${CLOUDINARY_URL}c_scale,r_5,w_265/${photo}.jpg`} />
            <PhotoUpload
            // photo={URL => this.setState({photo: URL})}
            />
          </label>
          <div className="add__submit-container">
            <button className="add__submit">Save changes</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  (state, { id }) => ({
    isFetching: getIsEventFetching(id, state),
    isEventProcessing: getIsEventProcessing(state),
    event: getEventById(state, id)
  }),
  { editEvent, fetchEvent },
  ({ event, isFetching, isEventProcessing }, { fetchEvent, editEvent }, { id, onSuccess }) => {
    if (!event && !isFetching) {
      fetchEvent(id)
    }
    return {
      id,
      event,
      editEvent,
      onSuccess,
      isEventProcessing
    }
  }
)(EventEdit)
