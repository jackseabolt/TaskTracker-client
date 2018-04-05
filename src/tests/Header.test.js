import React from 'react'; 
import { Header } from '../components/Header/Header'; 
import Login from '../components/Login/Login'; 
import { shallow, mount } from 'enzyme'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />); 
    }); 
    it('renders #header-login if no currentUser prop', () => {
        const wrapper = mount(<Router><Header /></Router>); 
        expect(wrapper.find('#header-login').exists()).toEqual(true); 
    }); 
    it('renders Login when loggingIn prop', () => {
        const store = mockStore({}); 
        const wrapper = mount(<Provider store={store}>
                <Router>
                    <Header loggingIn={true} />
                </Router>
            </Provider>); 
        expect(wrapper.contains(<Login />)).toEqual(true); 
    }); 
    it('dispatched action when #header-login is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Router><Header dispatch={spy} /></Router>); 
        wrapper.find('#header-login').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });
    it('renders #header-logout if currentUser prop', () => {
        const wrapper = mount(<Router><Header currentUser={true} /></Router>); 
        expect(wrapper.find('#header-logout').exists()).toEqual(true); 
    }); 
    it('dispatched action when #header-logout is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Router><Header dispatch={spy} currentUser={true} /></Router>); 
        wrapper.find('#header-logout').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });
}); 