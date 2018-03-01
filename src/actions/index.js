export const event = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            // console.log('aaaa', action)

            return {
                id: action.id,
                text: action.text,
                description: action.description,
                completed: false
            };
        case 'REMOVE_EVENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};
