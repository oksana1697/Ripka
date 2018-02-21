import React, {Component} from 'react'

import Navigation from "../common/Navigation"
import Footer from "../common/Footer"
import PersonalProfile from "PersonalProfile";

class PersonalProfileLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "PersonalProfileLayoutOrg">
                <Navigation/>
                <PersonalProfile/>
                <Footer/>
            </div>

        )
    }
}

export default PersonalProfileLayout


