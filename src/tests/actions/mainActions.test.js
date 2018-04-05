import { 
    TOGGLE_LOGIN, toggleLogin,
    SET_AUTH_TOKEN, setAuthToken,  
    ADD_TO_BOARDS, addToBoards,
    LOG_OUT, logOut,
    SET_CURRENT_BOARD, setCurrentBoard, 
    SET_SIGN_UP_FALSE, setSignUpFalse,
    SET_SIGN_UP_TRUE, setSignUpTrue,
    ABOUT_ON_TOGGLE, aboutOnToggle,
    AUTH_REQUEST, authRequest,
    AUTH_SUCCESS, authSuccess,
    AUTH_ERROR, authError
} from '../../actions/mainActions'; 

describe('mainActions', () => {
    describe('logOut', () => {
        it('has type of LOG_OUT', () => {
            expect(logOut().type).toEqual(LOG_OUT); 
        }); 
    });
    describe('toggleLogin', () => {
        it('has type of TOGGLE_LOGIN', () => {
            expect(toggleLogin().type).toEqual(TOGGLE_LOGIN); 
        }); 
    });
    describe('setAuthToken', () => {
        it('has type of SET_AUTH_TOKEN', () => {
            expect(setAuthToken().type).toEqual(SET_AUTH_TOKEN); 
        });
        it('has authtoken passed to action', () => {
            expect(setAuthToken('token').authToken).toEqual('token'); 
        });  
    }); 
    describe('authRequest', () => {
        it('has type of AUTH_REQUEST', () => {
            expect(authRequest().type).toEqual(AUTH_REQUEST); 
        }); 
    }); 
    describe('authSuccess', () => {
        it('has type of AUTH_SUCCESS', () => {
            expect(authSuccess().type).toEqual(AUTH_SUCCESS); 
        }); 
    }); 
    describe('authError', () => {
        it('has type of AUTH_ERROR', () => {
            expect(authError().type).toEqual(AUTH_ERROR); 
        });
        it('has error passed to action', () => {
            expect(authError('error').error).toEqual('error'); 
        });  
    });
    describe('setSignUpFalse', () => {
        it('has type of SET_SIGN_UP_FALSE', () => {
            expect(setSignUpFalse().type).toEqual(SET_SIGN_UP_FALSE); 
        }); 
    }); 
    describe('setSignUpTrue', () => {
        it('has type of SET_SIGN_UP_TRUE', () => {
            expect(setSignUpTrue().type).toEqual(SET_SIGN_UP_TRUE); 
        }); 
    });
    describe('aboutOnToggle', () => {
        it('has type of ABOUT_ON_TOGGLE', () => {
            expect(aboutOnToggle().type).toEqual(ABOUT_ON_TOGGLE); 
        }); 
    });
    describe('setCurrentBoard', () => {
        it('has type of SET_CURRENT_BOARD', () => {
            expect(setCurrentBoard().type).toEqual(SET_CURRENT_BOARD); 
        });
        it('has board_id passed to action', () => {
            expect(setCurrentBoard('id').board_id).toEqual('id'); 
        });  
    });
    describe('addToBoards', () => {
        it('has type of ADD_TO_BOARDS', () => {
            expect(addToBoards().type).toEqual(ADD_TO_BOARDS); 
        });
        it('has board_id passed to action', () => {
            expect(addToBoards('boards').boards).toEqual('boards'); 
        });  
    });
});