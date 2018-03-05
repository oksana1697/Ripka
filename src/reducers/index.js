import {combineReducers} from 'redux'
import events from './events'
const eventApp = combineReducers({
    events,
});
export default eventApp