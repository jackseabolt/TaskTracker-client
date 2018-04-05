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
} from '../../actions/mainActions'; 
import { mainReducer } from '../../reducers/mainReducer'; 
import { initialState } from '../../reducers/mainReducer';

describe('mainReducer', () => {
    describe('TOGGLE_LOGIN', () => {
        it('changes loggingIn', () => {
            const action = {type: TOGGLE_LOGIN}; 
            expect(mainReducer(initialState, action).loggingIn).toEqual(true); 
        }); 
        it('changes error', () => {
            const action = {type: TOGGLE_LOGIN}; 
            expect(mainReducer(initialState, action).error).toEqual(null); 
        }); 
    }); 
    describe('LOG_OUT', () => {
        it('changes authToken to null', () => {
            const action = {type: LOG_OUT};  
            expect(mainReducer(initialState, action).authToken).toEqual(null); 
        }); 
        it('changes currentUser to null', () => {
            const action = {type: LOG_OUT}; 
            expect(mainReducer(initialState, action).currentUser).toEqual(null); 
        }); 
        it('changes boards to []', () => {
            const action = {type: LOG_OUT}; 
            expect(mainReducer(initialState, action).boards).toEqual([]); 
        }); 
        it('changes currentBoardId to null', () => {
            const action = {type: LOG_OUT}; 
            expect(mainReducer(initialState, action).currentBoardId).toEqual(null); 
        }); 
    }); 
    describe('SET_AUTH_TOKEN', () => {
        it('sets authToken', () => {
            const action = {type: SET_AUTH_TOKEN, authToken: 'token'};  
            expect(mainReducer(initialState, action).authToken).toEqual('token'); 
        }); 
    }); 
    describe('AUTH_REQUEST', () => {
        it('sets loading to true', () => {
            const action = {type: AUTH_REQUEST};  
            expect(mainReducer(initialState, action).loading).toEqual(true); 
        }); 
        it('sets error to null', () => {
            const action = {type: AUTH_REQUEST}; 
            expect(mainReducer(initialState, action).error).toEqual(null); 
        });
    });
    describe('AUTH_ERROR', () => {
        it('sets error to action error', () => {
            const action = {type: AUTH_ERROR, error: 'error'};  
            expect(mainReducer(initialState, action).error).toEqual('error'); 
        }); 
        it('sets loading to false', () => {
            const action = {type: AUTH_ERROR, error: 'error'};  
            expect(mainReducer(initialState, action).loading).toEqual(false); 
        }); 
    });
    describe('SET_SIGN_UP_FALSE', () => {
        it('sets signUp to false', () => {
            const action = {type: SET_SIGN_UP_FALSE};  
            expect(mainReducer(initialState, action).signUp).toEqual(false); 
        }); 
    });
    describe('SET_SIGN_UP_TRUE', () => {
        it('sets signUp to true', () => {
            const action = {type: SET_SIGN_UP_TRUE};  
            expect(mainReducer(initialState, action).signUp).toEqual(true); 
        }); 
    });
    describe('ABOUT_ON_TOGGLE', () => {
        it('sets aboutOn to opposite', () => {
            const action = {type: ABOUT_ON_TOGGLE};  
            expect(mainReducer(initialState, action).signUp).toEqual(true); 
        }); 
    });
    describe('AUTH_SUCCESS', () => {
        it('sets currentUser to action currentUser', () => {
            const action = {type: AUTH_SUCCESS, currentUser: 'jeff'};  
            expect(mainReducer(initialState, action).currentUser).toEqual('jeff'); 
        }); 
        it('sets loading to false', () => {
            const action = {type: AUTH_SUCCESS, currentUser: 'jeff'};  
            expect(mainReducer(initialState, action).loading).toEqual(false); 
        }); 
        it('sets error to false', () => {
            const action = {type: AUTH_SUCCESS, currentUser: 'jeff'};  
            expect(mainReducer(initialState, action).error).toEqual(null); 
        }); 
    });
    describe('SET_CURRENT_BOARD', () => {
        it('sets board_id to action board_id', () => {
            const action = {type: SET_CURRENT_BOARD, board_id: 1};  
            expect(mainReducer(initialState, action).currentBoardId).toEqual(1); 
        }); 
    });
    describe('ADD_TO_BOARDS', () => {
        it('sets boarsds to action boards', () => {
            const action = {type: ADD_TO_BOARDS, boards: 'board'};  
            expect(mainReducer(initialState, action).boards).toEqual('board'); 
        }); 
    });
}); 