// import {combineReducers} from 'redux'
// import events from './events'
// const eventApp = combineReducers({
//     events,
// });
// export default eventApp


//done
import {combineReducers} from 'redux'
import events , * as fromEvents from './events'

const eventApp = combineReducers({
    events,
});
export default eventApp

// export const getVisibleEvents = (state) =>
//     fromEvents.getVisibleEvents(state.events);





