import React, {Component} from 'react'

class EventDetails extends Component {
    render() {
        const currentEvent = this.props.events.find((element) => {
            return element.name === this.props.match.params.eventName;
        });

        return (
            <div>
                <div className="event-details__title_container">
                    <div className="event-details__block-column">
                        <h1 className="event-details__title">{currentEvent.name}</h1>
                        <h2 className="event-details__subtitle">{currentEvent.organization}</h2>
                        {/*<img src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_24/v1521495793/icon_plvdyt.png"/>*/}
                        <p className="event-details__location">{currentEvent.location}</p>
                    </div>
                </div>
                <div className="event-details__title_container">
                    <div className="event-details__block-row">
                        <button className="event-details__button"><i className="event-details__icon-heard"/>
                            <span className="event-details__button-descr">Bookmark</span>
                        </button>
                        <button className="event-details__button"><i className="event-details__icon-flag"/>
                            <span className="event-details__button-descr">Report</span>

                        </button>
                    </div>
                </div>

            <div
        className = "event-details__container" >
            < p
        className = "event-details__content" > {currentEvent.description
    }</p>
        <p className="event-details__subtitle">LOCATION</p>
        <p className="event-details__content">{currentEvent.location}</p>
        <p className="event-details__subtitle">Date & time</p>
    {/*<p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
    {/*<p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
        <p className="event-details__subtitle">ORGANIZATION</p>
        <p className="event-details__content">{currentEvent.organization}</p>
        <p className="event-details__subtitle">CONTACTS</p>
        <p className="event-details__content">{currentEvent.contacts}</p>
    </div>
    </div>
    // </div>
    )
    }
    }

    export default EventDetails