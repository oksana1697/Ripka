import React, {Component} from 'react'

import Navigation from "../../src/main/Navigation"
import Footer from "../../src/main/Footer"
import Login from "nextStage/authorization/Login"
class LoginLayout extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "LoginLayout">
                <Navigation/>
                <Login/>
                <Footer/>
            </div>

        )
    }
}

export default LoginLayout


