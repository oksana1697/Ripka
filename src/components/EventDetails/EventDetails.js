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
      <div className={b()}>
          <div className={b('subnav')}>
            <div className={b('left')}>
              <div className={b('edit-container')}>
                <span className={b('icon-edit')} />
                <NavLink to={"/events/edit/" + event.id}>
                  <button className={b('btn')}>Edit event</button>
                </NavLink>
              </div>
              <div className={b('delete-container')}>
                <span className={b('icon-delete')} />
                <button
                  className={b('btn')}
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
          <div className={b('container')}>
            <div className={b('main-info')}>
              <h1 className={b('name')}>{event.name}</h1>
              <h2 className={b('organization')}>{event.organization}</h2>
              <div>
                <span className={b('icon-location')} />
                <p className={b('location')}>{event.location}</p>
              </div>
              <div className={b('block-row')}>
                <button className={b('button-bookmark')}>
                  <span className={b('icon-heard')} />
                  <span className={b('button-name')}>Bookmark</span>
                </button>

                <button className={b('button-report')}>
                  <span className={b('icon-flag')}/>
                  <span className={b('button-name')}>Report</span>
                </button>
              </div>
            </div>
          </div>
          <div className={b('additional-info')}>
            <div className={b('left-info')}>
              <div className={b('info-block')}>
                <div className={b('title-info')}>
                  <span className={b('icon-push-pin')} />
                  <h4 className={b('name-info-block')}>Event Overview</h4>
                  <hr className={b('divider')} />
                </div>
                <div className={b('info-cont')}>
                  <h6 className={b('story-title')}>Date & Time</h6>
                  <p className={b('story')}>{formatDate(event.time)}</p>
                </div>
                <div className={b('info-cont')}>
                  <h6 className={b('story-title')}>Categories</h6>
                  <p className={b('story')}>{event.category}</p>
                </div>
                  <div className={b('info-block')}>
                  <h6 className={b('story-title')}>Organization</h6>
                  <p className={b('story')}>{event.organization}</p>
                </div>
              </div>
              <div className={b('info-block')}>
                <div className={b('title-info')}>
                  <span className={b('icon-legal-paper')}/>
                  <h4 className={b('name-info-block')}>Event description</h4>
                  <hr className={b('divider')} />
                </div>
                <div className={b('info-cont')}>
                  <p className={b('description')}>{event.description}</p>
                </div>
              </div>
            </div>
            <div className={b('right-info')}>
              <span
                className={b('photo')}
                src={CLOUDINARY_URL + "c_fill,q_90/" + event.photo + ".jpg"}
              />
                <div className={b('info-block')}>
                <div className={b('title-info')}>
                  <span className="event-details__icon-contact" />
                  <h4 className={b('name-info-block')}>Contacts of organization</h4>
                  <hr className={b('divider')} />
                </div>
                <div className={b('info-cont')}>
                  <h6 className={b('story-title')}>Phone number</h6>
                  <p className={b('story')}>{event.contacts}</p>
                </div>
              </div>
              <div className={b('info-block')}>
                <div className={b('title-info')}>
                  <span className={b('icon-location')} />
                  <h4 className={b('name-info-block')}>Location</h4>
                  <hr className={b('divider')} />
                </div>
                <div className={b('info-cont')}>
                  <h6 className={b('story-title')}>City, country</h6>
                  <p className={b('story')}>{event.location}</p>
                </div>
                <div className="map__container-for-event">
                  <MapContainer events={[event]} />
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
