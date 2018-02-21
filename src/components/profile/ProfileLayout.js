import React, {Component} from 'react'

import Navigation from "../common/Navigation"
import Footer from "../common/Footer"
import Profile from "src/components/profile/Profile";

class ProfileLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "ProfileLayoutOrg">
                <Navigation/>
                <Profile/>
                <Footer/>
            </div>

        )
    }
}

export default ProfileLayout


