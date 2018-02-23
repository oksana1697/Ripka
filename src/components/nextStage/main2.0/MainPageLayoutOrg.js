import React, {Component} from 'react'

import Navigation from "../../common/Navigation"
import Event from "../../main/Event"
import Footer from "../../common/Footer"
import EventContainer from "../../main/EventContainer";
import EventContainer from "src/components/main/EventContainer"
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


