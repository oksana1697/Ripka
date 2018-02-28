import React, {Component} from 'react'

import Navigation from "../../../main/Navigation"
import Footer from "../../../main/Footer"
import Profile from "./Profile"

class ProfileLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "ProfileLayout">
                <Navigation/>
                <Profile/>
                <Footer/>
            </div>

        )
    }
}

export default ProfileLayout


