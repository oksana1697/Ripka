import { connect } from 'react-redux';
import EventDetails from './EventDetails';

const getVisibleEvents = events => {
  return events;
};

const VisibleEventDetailList = connect(getVisibleEvents)(EventDetails);
export default VisibleEventDetailList;
