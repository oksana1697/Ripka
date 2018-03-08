import React, {Component} from 'react'

class EventDetails extends Component {
    render() {
        const currentEvent = this.props.events.find((element) => {
           return element.name === this.props.match.params.eventName;
        });

        return (
            <div>
                <p>
                    Name: {currentEvent.name}
                </p>
                <p>About</p>
                <p>{currentEvent.description}</p>
                <p>Date & time</p>
                {/*<p>{date.toFormat("yyyy LLL dd")}</p>*/}
                {/*<p>{date.toFormat("HH:mm")}</p>*/}
                <br/>
                <br/>
            </div>
        )
    }
}

export default EventDetails