import React, { Component } from "react"
import { NavLink } from "react-router-dom"
// Todo: update css - remove additional
import moment from "moment"

import { CLOUDINARY_URL } from "../../api/index"

import MapContainer from "../MapContainer/MapContainer"
import PageNotFound from "../PageNotFound/PageNotFound"


import "../../styles/common.scss"
import "../Navigation/Navigation.scss"
import "../../styles/map.scss"
import "../AddUser/AddUser.scss"
import "./EventDetails.scss"

import block from '../../helpers/BEM'

const b = block('EventDetails')

class EventDetails extends Component {
  render() {
    let props = this.props
    const { event } = this.props
    if (!event) {
      return <PageNotFound />
    }
    return (
      <div className={b()}>
          <div className={b('settings')}>
              <div className={b('settings_button')}>
                <NavLink to={"/events/edit/" + event.id}>
                  <button className={b('settings_button_text')}>Edit event</button>
                </NavLink>
              </div>
              <div className={b('settings_button')}>
                <button
                  className={b('settings_button_text')}
                  onClick={() => {
                    props.deleteEvent(event.id)
                    this.props.onSuccess()
                  }}
                >
                  Delete event
                </button>
              </div>
          </div>
          <div className={b('header')}>
            <div className={b('header_container')}>
              <h1 className={b('header_container_name')}>{event.name}</h1>
              <h2 className={b('header_container_organization')}>{event.organization}</h2>
              <div>
                <p className={b('header_container_location')}>{event.location}</p>
              </div>
              <div className={b('options')}>
                <button className={b('options_button')}>
                 Bookmark
                </button>
                <button className={b('options_button')}>
                 Report
                </button>
              </div>
            </div>
          </div>
          <div className={b('details')}>
            <div className={b('details_left')}>
                <div>
                  <h3 className={b('details_name')}>Event Overview</h3>
                  <hr className={b('details_divider')} />
                </div>
                <div>
                  <p className={b('story-title')}>Date & Time</p>
                  <p className={b('story')}>{formatDate(event.time)}</p>
                </div>
                <div>
                  <p className={b('story-title')}>Categories</p>
                  <p className={b('story')}>{event.category}</p>
                </div>
                  <div>
                  <p className={b('story-title')}>Organization</p>
                  <p className={b('story')}>{event.organization}</p>
                </div>
                <div>
                  <h3 className={b('details_name')}>Event description</h3>
                  <hr className={b('details_divider')} />
                </div>
              <div>
                  <p className={b('story')}>{event.description}</p>
              </div>
            </div>
            <div className={b('details_right')}>
              <span
                className={b('photo')}
                src={CLOUDINARY_URL + "c_fill,q_90/" + event.photo + ".jpg"}
              />
                <div >
                  <h3 className={b('details_name')}>Contacts of organization</h3>
                  <hr className={b('details_divider')} />
                </div>
                  <p className={b('story-title')}>Phone number</p>
                  <p className={b('story')}>{event.contacts}</p>
                <div>
                  <h3 className={b('details_name')}>Location</h3>
                  <hr className={b('details_divider')} />
                </div>
                  <p className={b('story-title')}>City, country</p>
                  <p className={b('story')}>{event.location}</p>
                <div className="map__container-for-event">
                  <MapContainer events={[event]} />
                </div>
            </div>
          </div>
        </div>

    )
  }
}

function formatDate(date) {
  return new Date(moment(date).format()).toDateString()
}

export default EventDetails
