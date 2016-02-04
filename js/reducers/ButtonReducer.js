/**
 * Created by brizarda on 04/02/2016.
 */

const buttonReducer = (state = [], action) => {
    "use strict";
    if (!state || !action)
        return state;

    switch (action.type) {
        case 'ADD_BUTTON' :
            let newButtons = state.buttons || [];
            newButtons = newButtons.concat({
                id: action.id,
                name: action.name,
                message: action.message
            })
            return Object.assign({}, state, {buttons: newButtons})
            break
        case 'DEL_BUTTON' :
            return state.slice(action.id, 1)
            break
        default:
            return state;
    }
}

export default buttonReducer