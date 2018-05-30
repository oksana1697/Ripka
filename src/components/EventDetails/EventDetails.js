import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import "../../styles/event-details.scss"
import "../../styles/common.scss"
import "../Navigation/Navigation.scss"
import "../../styles/map.scss"

import moment from "moment"

import { CLOUDINARY_URL } from "../../api/index"
import MapContainer from "../MapContainer/MapContainer"
import PageNotFound from "../PageNotFound/PageNotFound"

/**
 * Represents view of single Event Details
 */
class EventDetails extends Component {
  render() {
    let props = this.props
    const { event } = this.props
    if (!event) {
      return <PageNotFound />
    }
    return (
      <div className="event-details">
        <div>
          <div className="event-details__subnav">
            <div className="event-details__left">
              <div className="event-details__edit-container">
                <span className="event-details__icon-edit" />
                <NavLink to={"/events/edit/" + event.id}>
                  <button className="event-details__btn">Edit event</button>
                </NavLink>
              </div>
              <div className="event-details__delete-container">
                <span className="event-details__icon-delete" />
                <button
                  className="event-details__btn"
                  onClick={() => {
                    props.deleteEvent(event.id)
                    this.props.onSuccess()
                  }}
                >
                  Delete event
                </button>
              </div>
            </div>
          </div>
          <div className="event-details__container">
            <div className="event-details__main-info">
              <h1 className="event-details__name">{event.name}</h1>
              <h2 className="event-details__organization">{event.organization}</h2>
              <div>
                <span className="event-details__icon-location" />
                <p className="event-details__location">{event.location}</p>
              </div>
              <div className="event-details__block-row">
                <button className="event-details__button-bookmark">
                  <span className="event-details__icon-heard" />
                  <span className="event-details__button-name">Bookmark</span>
                </button>

                <button className="event-details__button-report">
                  <span className="event-details__icon-flag" />
                  <span className="event-details__button-name">Report</span>
                </button>
              </div>
            </div>
          </div>
          <div className="event-details__additional-info">
            <div className="event-details__left-info">
              <div className="event-details__info-block">
                <div className="event-details__title-info">
                  <span className="event-details__icon-push-pin" />
                  <h4 className="event-details__name-info-block">Event Overview</h4>
                  <hr className="event-details__divider" />
                </div>
                <div className="event-details__info-cont">
                  <h6 className="event-details__story-title">Date & Time</h6>
                  <p className="event-details__story">{formatDate(event.time)}</p>
                </div>
                <div className="event-details__info-cont">
                  <h6 className="event-details__story-title">Categories</h6>
                  <p className="event-details__story">{event.category}</p>
                </div>
                <div className="event-details__info-cont">
                  <h6 className="event-details__story-title">Organization</h6>
                  <p className="event-details__story">{event.organization}</p>
                </div>
              </div>
              <div className="event-details__info-block">
                <div className="event-details__title-info">
                  <span className="event-details__icon-legal-paper" />
                  <h4 className="event-details__name-info-block">Event description</h4>
                  <hr className="event-details__divider" />
                </div>
                <div className="event-details__info-cont">
                  <p className="event-details__description">{event.description}</p>
                </div>
              </div>
            </div>
            <div className="event-details__right-info">
              <span
                className="event-details__photo"
                src={CLOUDINARY_URL + "c_fill,q_90/" + event.photo + ".jpg"}
              />
              <div className="event-details__info-block">
                <div className="event-details__title-info">
                  <span className="event-details__icon-contact" />
                  <h4 className="event-details__name-info-block">Contacts of organization</h4>
                  <hr className="event-details__divider" />
                </div>
                <div className="event-details__info-cont">
                  <h6 className="event-details__story-title">Phone number</h6>
                  <p className="event-details__story">{event.contacts}</p>
                </div>
              </div>
              <div className="event-details__info-block">
                <div className="event-details__title-info">
                  <span className="event-details__icon-location" />
                  <h4 className="event-details__name-info-block">Location</h4>
                  <hr className="event-details__divider" />
                </div>
                <div className="event-details__info-cont">
                  <h6 className="event-details__story-title">City, country</h6>
                  <p className="event-details__story">{event.location}</p>
                </div>
                <div className="map__container-for-event">
                  <MapContainer events={[event]} />
                </div>
              </div>
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
