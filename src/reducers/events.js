import event from './event';

const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description,
                    date: action.date,
                    organization: action.organization,
                    contacts: action.contacts,
                    location: action.location,
                }
            ];
        case 'RECEIVE_TODOS':
            return action.response.map(
                event => event.id
            )
            //
            //     const nextState = {...state};
            //         action.response.forEach(event => {
            //             nextState[event.id] = event;
            //         });
            // return nextState;



                default:
                    return state
            }
    }




export default events

// import { combineReducers } from 'redux';
// import event from './event';
//
// const byId = (state = {}, action) => {
//     switch (action.type) {
//         case 'ADD_EVENT':
//             return {
//                 ...state,
//                 [action.id]: event(state[action.id], action),
//             };
//         default:
//             return state;
//     }
// };
//
// const allIds = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_EVENT':
//             return [...state, action.id];
//         default:
//             return state;
//     }
// };
//
// const events = combineReducers({
//     byId,
//     allIds,
// });
//
// export default events;
//
// const getAllEvents = (state) =>
//     state.allIds.map(id => state.byId[id]);
//
// export const getVisibleEvents = (state) => {
//     console.log(getAllEvents(state))
//     const allEvents = getAllEvents(state);
//             return allEvents;}




