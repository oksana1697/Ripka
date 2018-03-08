import {connect} from 'react-redux'
import EventContainer from '../components/EventContainer'
const getVisibleEvents = (events) => {
    return events
};

const VisibleEventList = connect(getVisibleEvents)(EventContainer);

export default VisibleEventList;
