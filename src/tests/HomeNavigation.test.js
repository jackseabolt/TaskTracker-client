import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { HomeNavigation } from '../components/HomeNavigation/HomeNavigation';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('HomeNavigation', () => {
    it('renders without crashing', () => {
        shallow(<HomeNavigation />)
    }); 
    it('dispatches an action when #home-navigation-login-button is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Router><HomeNavigation dispatch={spy} /></Router>); 
        wrapper.find('#home-navigation-login-button').simulate('click'); 
        expect(spy).toHaveBeenCalledTimes(2); 
    }); 
    it('dispatches an action when #home-navigation-demo-button is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Router><HomeNavigation dispatch={spy} /></Router>); 
        expect(wrapper.find('#home-navigation-demo-button').exists()).toEqual(true); 
    }); 
}); 