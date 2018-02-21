import React, {Component} from 'react'

class PersonalProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="PersonalProfile">
                photo={this.state.photo} //not mandatory, if not provided system put default
                name={this.state.name} // mandatory
                description={this.state.description} // mandatory, up to 200 symbols
                location={this.state.location} // mandatory
                contacts={this.state.contacts}> //optional
            </div>
        )
    }
}

export default PersonalProfile