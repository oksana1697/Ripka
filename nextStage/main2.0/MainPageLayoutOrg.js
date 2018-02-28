import React, {Component} from 'react'

import Navigation from "../../../main/Navigation"
import Event from "../../../main/Event"
import Footer from "../../../main/Footer"
import EventContainer from "src/main/EventContainer"
class MainPageLayoutOrg extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "MainPageLayoutOrg">
                <Navigation/>
                    <EventContainer><Event/></EventContainer>
                    <EventContainer><Event/></EventContainer>
                <Footer/>
            </div>

        )
    }
}

export default MainPageLayoutOrg


