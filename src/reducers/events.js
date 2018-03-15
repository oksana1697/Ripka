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
                    ...action.response,
                ];
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    user_name: action.user_name,
                    user_description: action.description,
                    user_date: action.user_date,
                    user_interests: action.user_interests,
                    user_contacts: action.user_contacts,
                    user_location: action.user_location,
                }
            ];
        default:
            return state
    }
}


export default events




