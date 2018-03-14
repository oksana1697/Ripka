import React, {Component} from 'react'

class EventDetails extends Component {
    render() {
        const currentEvent = this.props.events.find((element) => {
            return element.name === this.props.match.params.eventName;
        });

        return (
            <div className="event-details__block">
                <div>
                    <img
                        src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_360/v1520973351/event-details_hvdg2j.jpg"/>
                </div>
                <div className="event-details__container">
                    {/*<p>{currentEvent.name}*/}
                    {/*</p>*/}
                    <p className="event-details__subtitle">ABOUT</p>
                    <p className="event-details__content">{currentEvent.description}</p>
                    <p className="event-details__subtitle">LOCATION</p>
                    <p className="event-details__content">{currentEvent.location}</p>
                    <p className="event-details__subtitle">Date & time</p>
                    <p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>
                    <p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>
                    <p className="event-details__subtitle">ORGANIZATION</p>
                    <p className="event-details__content">{currentEvent.organization}</p>
                    <p className="event-details__subtitle">CONTACTS</p>
                    <p className="event-details__content">{currentEvent.contacts}</p>
                </div>
            </div>
    )
    }
    }

    export default EventDetails