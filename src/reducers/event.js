const event = (state, action) => {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            console.log("STATE",state)
            return {

                id: action.id,
                    name: action.name,
                    description: action.description,
                    // date: action.date,
                    // organization: action.organization,
                    // contacts: action.contacts
            };
        default:
            return state;
    }
};

export default event;

