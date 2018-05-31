import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getIsEventProcessing, getIsEventFetching } from '../../reducers/index'
import { editEvent } from '../../actions/edit'
import { getEventById } from '../../reducers/events'
import { fetchEvent } from '../../actions/fetch'
import PhotoUpload from '../PhotoUpload/PhotoUpload'

import '../EventEdit/EventEdit.scss'
import { CLOUDINARY_URL } from '../../api/index'

import block from '../../helpers/BEM'

const b = block('EventEdit')

class EventEdit extends Component {
  constructor(props) {
    super(props)
    const initState = {
      name: '',
      description: '',
      organization: '',
      contacts: '',
      time: new Date(),
      location: '',
      photo: '',
      formSubmitted: false,
    }
    this.state = this.props.event ? this.props.event : initState
  }

  static defaultProps = {
    onSuccess() {},
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
        <form onSubmit={this.handleSubmit}>
          {formSubmitted && <div className={b('carpet')} />}
          <div className={b('title_sub-navigation')}>
            <h1 className={b('title_chapter')}>Edit event details</h1>
          </div>
          <div className={b('title_sub-navigation')}>
            <img alt="" src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
            <h1 className={b('title_chapter')}>Event Overview</h1>
          </div>

            <div className={b('input')}>
            <label className={b('field')}>Event name</label>
            <input
                className={b('input_text')}
              placeholder="Event Name"
              value={name}
              onChange={this.changeHandler('name')}
            />
            </div>
            <div className={b('input')}>
                <label className={b('field')}>ORGANIZATION NAME</label>
            <input
                className={b('input_text')}
              placeholder="Organization Name"
              value={organization}
              onChange={this.changeHandler('organization')}
            />
            </div>
          <div className={b('input')}>
          <label className={b('field')}>LOCATION</label>
            <input
                className={b('input_text')}
              placeholder="Location"
              value={location}
              onChange={this.changeHandler('location')}
            />
          </div>
            <div className={b('input')}>

                <label className={b('field')}>CONTACTS</label>
            <input
                className={b('input_text')}
              placeholder="Contacts"
              value={contacts}
              onChange={this.changeHandler('contacts')}
            />
            </div>
            <div className={b('input')}>
            <label className={b('field')}>
                EVENT DESCRIPTION & REQUIREMENTS</label>
            <textarea
                className={b('input_text')}
              placeholder="Description"
              value={description}
              onChange={this.changeHandler('description')}
              required
            />
            </div>
            <div className={b('input')}>
                <label className={b('field')}>DOWNLOAD PHOTO</label>
            <img alt="" src={`${CLOUDINARY_URL}c_scale,r_5,w_265/${photo}.jpg`} />
            <PhotoUpload
            // photo={URL => this.setState({photo: URL})}
            />
          </div>
            <div className={b('submit')}>
                <button className={b('submit_button')}>Save changes</button>
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
    event: getEventById(state, id),
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
      isEventProcessing,
    }
  },
)(EventEdit)
