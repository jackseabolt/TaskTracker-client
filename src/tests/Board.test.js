import React from 'react'; 
import { Board } from '../components/Board/Board'; 
import { shallow, mount } from 'enzyme'; 
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'; 
import { Provider } from 'react-redux'; 

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Board', () => {
    it('renders without crashing', () => {
        shallow(<Board />); 
    }); 
    it('contains redirect when no props', () => {
        const wrapper = mount(<Router><Board /></Router>); 
        expect(wrapper.contains(<Redirect to="/navigation" />)).toEqual(true); 
    }); 
}); 
