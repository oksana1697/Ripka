import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="navigation__container">
                <h1 className="navigation__logo">Ripka</h1>
                <Link to="/addevent"><button className="navigation__button">POST AN EVENT</button></Link>
                {/*<button className="navigation__button">POST AN EVENT</button>*/}
            </div>
        )
    }
}

export default Navigation