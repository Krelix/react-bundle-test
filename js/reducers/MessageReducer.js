/**
 * Created by brizarda on 05/02/2016.
 */

const messageReducer = (state = {}, action) => {
    "use strict";
    if (!action)
        return state;

    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessages = state.messages || [];
            newMessages = newMessages.concat({
                id: action.id,
                date: new Date(),
                text: action.text
            })
            return Object.assign({}, state, {messages: newMessages});
            break;
        default:
            return state;
    }
}

export default messageReducer