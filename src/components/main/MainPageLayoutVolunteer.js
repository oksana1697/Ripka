import React, {Component} from 'react'

import Navigation from "../common/Navigation"
import Event from "../main/Event"
import Footer from "../common/Footer"
import EventContainer from "./EventContainer"

import { createStore } from 'react'

export class MainPageLayoutVolunteer extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "MainPageLayoutVolunteer">
                <Navigation/>
                    <EventContainer><Event/></EventContainer>
                <Footer/>
            </div>

        )
    }
}

export default MainPageLayoutVolunteer



