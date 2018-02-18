import React, {Component} from 'react'

import Navigation from "../common/Navigation"
import ProfilePage from "./profile/ProfilePage"
import Footer from "../common/Footer"

class ProfilePageLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="ProfilePageLayout">
                <Navigation/>
                <ProfilePage/>
                <Footer/>
            </div>
        )
    }
}

export default ProfilePageLayout

