import React, {Component} from 'react'

class EventDetails extends Component {
    render() {
        const currentEvent = this.props.events.find((element) => {
            return element.name === this.props.match.params.eventName;
        });

        return (
                <div>
                    <div className="event-details__title_container">
                    <div className="event-details__block">
                        <h1 className="event-details__title">{currentEvent.name}
                    </h1>
                    <h2 className="event-details__subtitle">{currentEvent.organization}</h2>
                        <div>
                        <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_24/v1521495793/icon_plvdyt.png"/>
                        <p className="event-details__location">{currentEvent.location}</p>
                        </div>
                            <div className="event-details__title_container">

                                <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_24/v1521495793/icon_plvdyt.png"/>
                                <button className="event-details__button">Bookmark</button>

                            <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_24/v1521495793/icon_plvdyt.png"/>
                            <button className="event-details__button">Report</button>
                        </div>

                        </div>
                    </div>


                        <img
                        src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_360/v1520973351/event-details_hvdg2j.jpg"/>
                <div className="event-details__container">

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