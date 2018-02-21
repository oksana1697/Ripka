import React, {Component} from 'react'

import SignUp from "SignUp"
import Navigation from "../common/Navigation"
import Footer from "../common/Footer"

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


