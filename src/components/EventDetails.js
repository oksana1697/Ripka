import React, {Component} from 'react'

class EventDetails extends Component {
    render() {
        const currentEvent = this.props.events.find((element) => {
           return element.name === this.props.match.params.eventName;
        });

        return (
            <div className="event-details_block">
            <div>
                <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,w_360/v1520973351/event-details_hvdg2j.jpg"/>
            </div>
                <div className="event-details__container">
                <p>
                    Name: {currentEvent.name}
                </p>
                <p>About</p>
                <p>{currentEvent.description}</p>
                <p>Date & time</p>
                <p>{currentEvent.date.toFormat("yyyy LLL dd")}</p>
                <p>{currentEvent.date.toFormat("HH:mm")}</p>
                <br/>
                <br/>
            </div>
            </div>
        )
    }
}

export default EventDetails