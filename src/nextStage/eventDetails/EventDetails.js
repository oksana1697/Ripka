import React, {Component} from 'react'

class EventDetails extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return (
        <div className ="EventDetails">
               photo={this.state.photo} //not mandatory, if not provided system put default
               name={this.state.name} // mandatory
               category={this.state.category} // one is required, up to 4 form the list of options
               description={this.state.description} // mandatory, up to 200 symbols
               location={this.state.location} // mandatory
               date={this.state.date} // mandatory
               time={this.state.time} // mandatory
               organization={this.state.organization} //system provide
               contacts={this.state.contacts}> //optional
    </div>
        )
    }
}

export default EventDetails