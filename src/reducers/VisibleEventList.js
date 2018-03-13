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
import * as fetchTodos from "../actions";
// import {getVisibleEvents} from "../reducers";
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
        console.log("Render:",{...rest})
        return (
            <EventContainer
                {...rest}
            />
        )
    }
}
// const mapStateToTodoListProps = (state) => {
//     return {
//         events: getVisibleEvents(
//             state)
//     }
// };

const getVisibleEvents = (events) =>{
    return events
}

VisibleEventList = withRouter(connect(
    // mapStateToTodoListProps,
    getVisibleEvents,
    fetchTodos
)(VisibleEventList));

export default VisibleEventList;




