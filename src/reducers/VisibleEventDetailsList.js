//done
import {connect} from 'react-redux'
import EventDetails from "../components/EventDetails";


const getVisibleEvents = (events) => {
    return events
};

const VisibleEventDetailList = connect(getVisibleEvents)(EventDetails);

export default VisibleEventDetailList;
