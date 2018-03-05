// import {createStore} from "redux";
// import {event} from '../actions/index'
//
// export const events = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_EVENT':
//             return [
//                 ...state,
//                 event(undefined, action)
//             ];
//         case 'REMOVE_EVENT':
//             return state.map(t => event(t, action));
//         default:
//             return state;
//     }
// };
//
// import {combineReducers} from 'redux';
//
// const eventApp = combineReducers({
//     events
// });
//
// export const store = createStore(eventApp);

const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description,
                    date: action.date
                }
            ];
        default:
            return state
    }
};

export default events