import React, {Component} from 'react'

import SignUp from "nextStage/authorization/SignUp"
import Navigation from "../../src/main/Navigation"
import Footer from "../../src/main/Footer"

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


