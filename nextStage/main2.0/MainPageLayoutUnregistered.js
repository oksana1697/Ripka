import React, {Component} from 'react'

import Footer from "../../../main/Footer"

class MainPageLayoutUnregistered extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "MainPageLayoutUnregistered">
                <Footer/>
            </div>

        )
    }
}

export default MainPageLayoutUnregistered


