import {
    USER_ERROR,
    USER_INFO
} from './types';

// User Error Message
function userError(message) {
    return {
        type: USER_ERROR,
        error: message
    };
}

// User Info Message
//TODO: Not implemented
function userInfo(message) {
    return {
        type: USER_INFO,
        payload: message
    };
}

export default function userMessage(message, type) {
    if (type === 'info') {
        return userInfo(message);
    } else if (type === 'error') {
        return userError(message);
    }
}