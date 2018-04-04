import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { Login } from '../components/Login/Login'; 

describe('Login', () => {
    it('renders without crashing', () => {
        shallow(<Login />); 
    }); 
    it('renders login form when initialized', () => {
        const wrapper = mount(<Login />); 
        expect(wrapper.contains(<h2 className="login-title">Log in</h2>)).toEqual(true); 
    }); 
    it('renders with signUp form if props signUp is truthy', () => {
        const wrapper = mount(<Login signUp={true} />); 
        expect(wrapper.contains(<h2 className="login-title">Sign Up</h2>)).toEqual(true); 
    });
    it('dispatches an action when .login-link is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Login dispatch={spy} />); 
        wrapper.find('.login-link').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('dispatches an action when .login-link is clicked and singUp is truthy', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Login dispatch={spy} signUp={true} />); 
        wrapper.find('.login-link').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });
    it('dispatches and action when .login-close is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Login dispatch={spy} />); 
        wrapper.find('.login-close').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    });
    it('dispatched one action when login form submitted', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Login dispatch={spy} />); 
        wrapper.find('form').simulate('submit');
        expect(spy).toHaveBeenCalledTimes(1);  
    });  
}); 
