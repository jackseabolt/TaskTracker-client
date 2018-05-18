import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import { mainReducer } from './reducers/mainReducer'; 
import {loadAuthToken} from './local-storage';
import {setAuthToken, storeAuthInfo, toggleLogin} from './actions/mainActions';
 

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)); 

// Ensures authToken is available for page refreshes
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    storeAuthInfo(token, store.dispatch); 
    store.dispatch(setAuthToken(token));
    store.dispatch(toggleLogin()); 
}

export default store; 