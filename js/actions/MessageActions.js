/**
 * Created by brizarda on 05/02/2016.
 */

let nextMessageId = 0;

export const addMessage = (text) => {
    "use strict";
    return {
        type: 'ADD_MESSAGE',
        id: nextMessageId++,
        text
    }
}