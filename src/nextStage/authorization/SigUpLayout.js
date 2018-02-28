import React, {Component} from 'react'

import SignUp from "src/nextStage/authorization/SignUp"
import Navigation from "../../main/Navigation"
import Footer from "../../main/Footer"

class SignUpLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "SignUpLayout">
                <Navigation/>
                <SignUp/>
                <Footer/>
            </div>

        )
    }
}

export default SignUpLayout


