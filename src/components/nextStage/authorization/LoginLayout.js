import React, {Component} from 'react'

import Navigation from "../../common/Navigation"
import Footer from "../../common/Footer"
import Login from "src/components/nextStage/authorization/Login"
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


