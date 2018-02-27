import React, {Component} from 'react'


export class Event extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className = "Event">
               <Event
                   photo={this.state.photo}
                   location={this.state.location}
                   time={this.state.time}
                   name={this.state.name}
                   orgName={this.state.orgName}

                   />
            </div>

        )
    }
}

export default Event


