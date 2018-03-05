//done
import {connect} from 'react-redux'
import EventContainer from '../components/EventContainer'


const getVisibleEvents = (todos) => {
    console.log(todos);

    return todos
};
// this function return state (my todos) and filter(assign to the
// my todos) of TodoApp current state

const VisibleEventList = connect(getVisibleEvents)(EventContainer);

export default VisibleEventList;