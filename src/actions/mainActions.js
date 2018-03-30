'use strict'; 

import {normalizeResponseErrors} from './utils';
import jwtDecode from 'jwt-decode'; 
import { saveAuthToken, clearAuthToken } from '../local-storage'; 


export const LOG_OUT = 'LOG_OUT'; 
export const logOut = () => ({
    type: LOG_OUT
}); 

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'; 
export const toggleLogin = () => ({
    type: TOGGLE_LOGIN
}); 

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const ADD_TO_BOARDS = 'ADD_TO_BOARD'; 
export const addToBoards = boards => ({
    type: ADD_TO_BOARDS, 
    boards
}); 

export const signUp = (username, password) => dispatch => {
    return fetch('http://localhost:8080/users/', {
        method: 'POST', 
        body: JSON.stringify({
            username, password
        }), 
        headers: {
           'Content-Type': 'application/json' 
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        console.error(err)
    }); 
}

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken)); 
    dispatch(authSuccess(decodedToken.user)); 
    dispatch(getUserBoards(decodedToken.user.id)) 
    saveAuthToken(authToken); 
}

export const login = (username, password) => dispatch => {
    // dispatch(authRequest());
    return (
        fetch(`http://localhost:8080/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        // Reject any requests which don't return a 200 status, creating
        // errors which follow a consistent format
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => {
            storeAuthInfo(authToken, dispatch)
            return authToken
        })
        .then(token => console.log(`TOKEN ${token}`))
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to login, please try again';
            console.error(message)
            // dispatch(authError(err));
        })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    // dispatch(authRequest());
    const authToken = getState().authToken;
    return fetch(`http://localhost:8080/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            // dispatch(authError(err));
            // dispatch(clearAuth());
            clearAuthToken(authToken);
        });
}

export const createBoard = (name, user_id) => (dispatch, getState) => {
    const authToken = getState().authToken; 
    console.log(`IN ACTION: ${name}${user_id}`)
    return fetch('http://localhost:8080/board/', {
        method: 'POST', 
        headers: {
            Authorization: `Bearer ${authToken}`, 
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, user_id })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {return res.json()})
    .then(board => dispatch(getUserBoards(user_id)))
    .catch(err => {
        console.error(err); 
    });
}

export const getUserBoards = (user_id) => (dispatch, getState) => {
    console.log(user_id)
    const authToken = getState().authToken; 
    return fetch(`http://localhost:8080/users/${user_id}`, {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {return res.json()})
    .then(user => {
        dispatch(addToBoards(user.boards)); 
        console.log(user); 
    })
    .catch(err => {console.error(err)});
}