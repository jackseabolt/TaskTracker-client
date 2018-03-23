import { TOGGLE_LOGIN } from '../actions/mainActions'; 

const initialState = {
    loggingIn: false
}

export const mainReducer = (state=initialState, action) => {
    if(action.type === TOGGLE_LOGIN) {
        return Object.assign({}, state, {
            loggingIn: !state.loggingIn
        }); 
    }
    return state; 
}