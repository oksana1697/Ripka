import React, {Component} from 'react'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="navigation__container">
                <h1 className="navigation__logo">Ripka</h1>
                <button className="navigation__button">POST AN EVENT</button>
            </div>
        )
    }
}

export default Navigation