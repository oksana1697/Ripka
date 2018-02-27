import React, {Component} from 'react'

import Navigation from "../../common/Navigation"
import EventDetails from "./EventDetails"
import Footer from "../../common/Footer"

class EventDetailsLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="EventDetailsLayout">
                <Navigation/>
                <EventDetails/>
                <Footer/>
            </div>
        )
    }
}

export default EventDetailsLayout

