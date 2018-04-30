import React, { Component } from "react";
import { deleteEvent } from "../../actions/delete";

import "../../../styles/event-details.less";
/**
 * Represents view of single Event Details
 */
class EventDetails extends Component {
  render() {
    let props = this.props;
    const { event } = this.props;

    if (!event) { return "Loading..."; }

    return (
      <div>
        <div className="event-details__title_container">
          <div className="event-details__block-column">
            <h1 className="event-details__title">{event.name}</h1>
            <h2 className="event-details__subtitle">{event.organization}</h2>
            <p className="event-details__location">{event.location}</p>
          </div>
        </div>
        <div className="event-details__title_container">
          <div className="event-details__block-row">
            <button className="event-details__button">
              <img className="event-details__icon-heard" />
              <span className="event-details__button-descr">Bookmark</span>
            </button>
            <button className="event-details__button">
              <img className="event-details__icon-flag" />
              <span className="event-details__button-descr">Report</span>
            </button>
          </div>
        </div>
        <div className="event-details__block-column">
          <div className="event-details__subtitle_container">
            <img className="event-details__icon-paper" />
            <h1 className="event-details__subtitle">Event Overview</h1>
          </div>
          <div className="event-details__container">
            <p className="event-details__content">{event.description}</p>
            <div className="event-details__subtitle_container">
              <img className="event-details__icon-calendar" />
              <h1 className="event-details__subtitle">Date & time</h1>
            </div>
            {/*<p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
            {/*<p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
            <div className="event-details__subtitle_container">
              <img className="event-details__icon-contact" />
              <h1 className="event-details__subtitle">Contacts</h1>
            </div>
            <p className="event-details__content">{event.contacts}</p>
          </div>
          <button
            className="event-details__button-delete"
            onClick={() => {
                props.dispatch(deleteEvent(event.id))

                props.history.push("/");
            }}
          >
            Delete event
          </button>
        </div>
      </div>
    );
  }
}

export default EventDetails;
