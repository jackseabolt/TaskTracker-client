import { 
    TOGGLE_LOGIN, 
    SET_AUTH_TOKEN,  
    ADD_TO_BOARDS, 
    LOG_OUT, 
    SET_CURRENT_BOARD, 
    SET_SIGN_UP_FALSE, 
    SET_SIGN_UP_TRUE, 
    ABOUT_ON_TOGGLE, 
    AUTH_REQUEST, 
    AUTH_SUCCESS, 
    AUTH_ERROR
} from '../actions/mainActions'; 

const initialState = {
    loggingIn: false,
    authToken: null, // authToken !== null does not mean it is valid
    currentUser: null, // object includes id and username
    boards: [], 
    currentBoardId: null, 
    signUp: true, 
    aboutOn: false, 
    loading: false,
    error: null
}

export const mainReducer = (state=initialState, action) => {
    if(action.type === TOGGLE_LOGIN) {
        return Object.assign({}, state, {
            loggingIn: !state.loggingIn, 
            error: null
        }); 
    }
    else if(action.type === LOG_OUT) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null,
            boards: [], 
            currentBoardId: null
        }); 
    }
    else if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === SET_SIGN_UP_FALSE) {
        return Object.assign({}, state, {
            signUp: false
        });
    }
    else if (action.type === SET_SIGN_UP_TRUE) {
        return Object.assign({}, state, {
            signUp: true
        });
    }
    else if (action.type === ABOUT_ON_TOGGLE) {
        return Object.assign({}, state, {
            aboutOn: !state.aboutOn
        });
    }
    else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: action.currentUser, 
            loading: false, 
            error: null
        });
    } 
    else if (action.type === SET_CURRENT_BOARD) {
        return Object.assign({}, state, {
            currentBoardId: action.board_id
        }); 
    }
    else if (action.type === ADD_TO_BOARDS) {
        return Object.assign({}, state, {
            boards: action.boards
        }); 
    }
    return state; 
}