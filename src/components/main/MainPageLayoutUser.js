import React, {Component} from 'react'

import Navigation from "../common/Navigation"
import EventListContainer from "../main/EventListContainer"
import EventStatic from "../main/eventStatic/EventStatic"
import Event from "../main/Event"
import Footer from "../common/Footer"

class MainPageLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "MainPageLayout">
                <Navigation/>
                <EventListContainer>
                    <EventStatic><Event/></EventStatic>
                </EventListContainer>
                <Footer/>
            </div>

        )
    }
}

export default MainPageLayout


