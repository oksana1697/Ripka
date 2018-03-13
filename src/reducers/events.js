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
        case 'RECEIVE_EVENTS':
                return [
                    ...state,
                    ...action.response,
                ];
        default:
            return state
    }
}


export default events




