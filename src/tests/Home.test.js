import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { Redirect } from 'react-router-dom';
import { Home } from '../components/Home/Home'; 
import Login from '../components/Login/Login'; 
import About from '../components/About/About'; 
import Navigation from '../components/Navigation/Navigation'; 
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

const middlewares = []
const mockStore = configureStore(middlewares); 
const initialState = {}
const store = mockStore(initialState);

describe('Home', () => {
    it('renders without crashing', () => {
        shallow(<Home />); 
    }); 
    it('has a state started that initializes with false value', () => {
        const wrapper = shallow(<Home />); 
        expect(wrapper.state('started')).toEqual(false); 
    }); 
    it('renders Login is loggingIn props truthy', () => {
        const wrapper = mount(<Provider store={store}><Home loggingIn={true} /></Provider>);
        expect(wrapper.contains(<Login />)).toEqual(true);  
    }); 
    it('renders Login is aboutOn props truthy', () => {
        const wrapper = mount(<Provider store={store}><Home aboutOn={true} /></Provider>);
        expect(wrapper.contains(<About />)).toEqual(true);  
    }); 
    it('renders Login is loggedIn props truthy', () => {
        const wrapper = mount(<Provider store={store}><Router><Home loggedIn={true} /></Router></Provider>);
        expect(wrapper.contains(<Redirect to='/navigation' />)).toEqual(true);  
    });
}); 