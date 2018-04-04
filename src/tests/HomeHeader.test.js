import React from 'react';
import { shallow, mount } from 'enzyme'; 
import { HomeHeader } from '../components/HomeHeader/HomeHeader'; 

describe('HomeHeader', () => {
    it('renders without crashing', () => {
        shallow(<HomeHeader />); 
    });
    it('dispatches action when .home-header-login-button is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<HomeHeader dispatch={spy} />); 
        wrapper.find('.home-header-login-button').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('dispatches action when .home-header-about-button is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<HomeHeader dispatch={spy} />); 
        wrapper.find('.home-header-about-button').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });  
}); 

