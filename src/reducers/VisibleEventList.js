import {connect} from 'react-redux'
// import EventContainer from '../components/EventContainer'
// const getVisibleEvents = (events) => {
//     return events
// };
//
// const VisibleEventList = connect(getVisibleEvents)(EventContainer);
//
// export default VisibleEventList;
import React, {Component} from'react'
import EventContainer from "../components/EventContainer";
import {withRouter} from "react-router-dom";
import {fetchTodos} from "../actions";
class VisibleEventList extends Component {
    componentDidMount(){
            this.fetchData()
    }
    fetchData(){
        const  {fetchTodos} = this.props;
        fetchTodos()
    }
    render(){
        const { ...rest} =  this.props;
        console.log("Render REST:",{...rest})
        return (
            <EventContainer
                {...rest}
            />
        )
    }
}
const getVisibleEvents = (events) => {
    return events
};

VisibleEventList = withRouter(connect(getVisibleEvents,
    {fetchTodos}
)(VisibleEventList));

export default VisibleEventList;




