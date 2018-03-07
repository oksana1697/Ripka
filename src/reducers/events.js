const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            console.log("JSON ACTION.DATE",JSON.stringify(action.date));
            console.log("TYPEOF ACTION.DATE",action.date.toFormat("yyyy"))


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