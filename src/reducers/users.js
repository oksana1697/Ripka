const users = (state = [], action) => {
    switch (action.type) {
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
        case 'RECEIVE_USERS':
            return [
                ...action.response,
            ];
        default:
            return state
    }
};


export default users




