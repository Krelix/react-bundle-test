let nextButtonId = 0;

export const createButton = (name, message) => {
    "use strict";
    return {
        type: 'ADD_BUTTON',
        id: nextButtonId++,
        name,
        message
    }
}

export const deleteButton = (id) => {
    "use strict";
    return {
        type: 'DEL_BUTTON',
        id
    }
}