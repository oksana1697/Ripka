import React, {Component} from 'react'

import Navigation from "../../main/Navigation"
import Footer from "../../main/Footer"
import Login from "src/nextStage/authorization/Login"
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


