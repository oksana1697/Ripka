import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../../../styles/event-details.less';
import "../../../styles/event.less";
import moment from 'moment';
import Navigation from '../Navigation/Navigation';
import NavigationLanding from '../Navigation/NavigationLanding';

/**
 * Represents view of single Event Details
 */
class EventDetails extends Component {
    render() {
        let props = this.props;
        const {event} = this.props;
        if (!event) {
            return 'Loading...';
        }
        return (
            <div className="event-details__main">
                <NavigationLanding/>
                <div className="event-details__main-container">
                    <div className='event-details__subnav'>
                        <div className='event-details__left'>
                            <div className='event-details__edit'>
                                <img className="event-details__icon-edit"/>
                                <NavLink
                                    to={'/edit/' + event.id}
                                >
                                    <button className="event-details__btn">Edit event</button>
                                </NavLink>
                            </div>
                            <div className='event-details__delete'>
                                <img className="event-details__icon-delete"/>
                                <button
                                    className="event-details__btn"
                                    onClick={() => {
                                        props.deleteEvent(event.id);
                                        this.props.onSuccess();
                                    }}
                                >
                                    Delete event
                                </button>
                            </div>
                        </div>
                        <div className='event-details__right'>
                            <button className='event__signUp'>Sign up</button>
                            <span className='event__divider'></span>
                            <button className='event__logIn'>Log in</button>
                        </div>
                    </div>
                    <div className="event-details__big">
                        <div className="event-details__mn">
                            <h1 className="event-details__name">{event.name}</h1>
                            <h2 className="event-details__organization">{event.organization}</h2>
                            <div className="event-details__location-block">
                                <img className="event-details__icon-location"/>
                                <p className="event-details__location">{event.location}</p>
                            </div>
                            <div className="event-details__block-row">
                                <button className="event-details__button-bookmark">
                                    <img className="event-details__icon-heard"/>
                                    <span className="event-details__button-descr">Bookmark</span>
                                </button>

                                <button className="event-details__button-report">
                                    <img className="event-details__icon-flag"/>
                                    <span className="event-details__button-descr">Report</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="event-details__info">
                        <div className="event-details__left-info">
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-push-pin"/>
                                    <h4 className="event-details__subt">Event Overview</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Date & Time</h6>
                                    <p className="event-details__story">{formatDate(event.time)}</p>
                                </div>
                                {/*<div className="event-details__info-cont">*/}
                                {/*<h6 className="event-details__story-title">Location</h6>*/}
                                {/*<p className="event-details__story">{event.location}</p>*/}
                                {/*</div>*/}
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Categories</h6>
                                    <p className="event-details__story">Nonprofit</p>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Organization</h6>
                                    <p className="event-details__story">{event.organization}</p>
                                </div>
                            </div>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-legal-paper"/>
                                    <h4 className="event-details__subt">Event description</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <p className="event-details__description">{event.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-details__right-info">
                            <img className="event-details__photo" src={event.photo}/>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-location"/>
                                    <h4 className="event-details__subt">Location</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Region, city</h6>
                                    <p className="event-details__story">{event.location}</p>
                                </div>
                            </div>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-contact"/>
                                    <h4 className="event-details__subt">Contacts of organization</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Phone number</h6>
                                    <p className="event-details__story">{event.contacts}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="block">*/}
                {/*<div className="event-details__title_container">*/}
                {/*<div className="event-details__block-column">*/}
                {/*<h1 className="event-details__title">{event.name}</h1>*/}
                {/*<h2 className="event-details__subtitle">{event.organization}</h2>*/}
                {/*<p className="event-details__location">{event.location}</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="event-details__title_container">*/}
                {/*<div className="event-details__block-row">*/}
                {/*<button className="event-details__button">*/}
                {/*<img className="event-details__icon-heard" />*/}
                {/*<span className="event-details__button-descr">Bookmark</span>*/}
                {/*</button>*/}
                {/*<button className="event-details__button">*/}
                {/*<img className="event-details__icon-flag" />*/}
                {/*<span className="event-details__button-descr">Report</span>*/}
                {/*</button>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="block2">*/}
                {/*<div className="event-details__block-column">*/}
                {/*<div className="event-details__subtitle_container">*/}
                {/*<img className="event-details__icon-paper" />*/}
                {/*<h1 className="event-details__subtitle">Event Overview</h1>*/}
                {/*</div>*/}
                {/*<div className="event-details__container">*/}
                {/*<p className="event-details__content">{event.description}</p>*/}
                {/*<div className="event-details__subtitle_container">*/}
                {/*<img className="event-details__icon-calendar" />*/}
                {/*<h1 className="event-details__subtitle">Date & time</h1>*/}
                {/*</div>*/}
                {/*<div className="event-details__subtitle_container">*/}
                {/*<img className="event-details__icon-contact" />*/}
                {/*<h1 className="event-details__subtitle">Contacts</h1>*/}
                {/*<p className="event-details__content">{event.contacts}</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

function formatDate(date) {
    return new Date(moment(date).format()).toDateString();
}

export default EventDetails;
