import { 
    TOGGLE_LOGIN, 
    SET_AUTH_TOKEN, 
    AUTH_SUCCESS, 
    UPDATE_CURRENT_USER, 
    ADD_TO_BOARDS 
} from '../actions/mainActions'; 

const initialState = {
    loggingIn: false,
    authToken: null, // authToken !== null does not mean it is valid
    currentUser: null, // object includes id and username
    boards: []
}

export const mainReducer = (state=initialState, action) => {
    if(action.type === TOGGLE_LOGIN) {
        return Object.assign({}, state, {
            loggingIn: !state.loggingIn
        }); 
    }
    else if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } 
    else if (action.type === ADD_TO_BOARDS) {
        return Object.assign({}, state, {
            boards: state.boards.concat([...action.boards])
        }); 
    }
    return state; 
}