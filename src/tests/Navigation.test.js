import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { Navigation } from '../components/Navigation/Navigation'; 
import BoardSelector from '../components/BoardSelector/BoardSelector'; 
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

const middlewares = []
const mockStore = configureStore(middlewares); 
const initialState = {}
const store = mockStore(initialState);

describe('Navgiation', () => {
    it('renders without crashing', () => {
        shallow(<Navigation boards={[]} />); 
    }); 
}); 