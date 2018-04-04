import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import Form from '../components/Form/Form'; 

describe('Form', () => {
    it('renders without crashing', () => {
        shallow(<Form />); 
    });
    it('dispatches onAdd prop when proper input provided', () => {
        const spy = jest.fn();  
        const wrapper = mount(<Form onAdd={spy} />); 
        wrapper.find('.form-input').instance().value = "Test";
        wrapper.find('form').simulate('submit')
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('clears input value when submitted', () => {
        const spy = jest.fn();  
        const wrapper = mount(<Form onAdd={spy} />); 
        wrapper.find('.form-input').instance().value = "Test";
        wrapper.find('form').simulate('submit')
        expect(wrapper.find('.form-input').instance().value).toEqual(''); 
    }); 
    it('does not dispatch onAdd prop if input has length < 1', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Form  onAdd={spy} />); 
        wrapper.find('.form-input').instance().value = ""; 
        wrapper.find('form').simulate('submit'); 
        expect(spy).not.toHaveBeenCalled(); 
    }); 
    it('displays error message if input is empty', () => {
        const wrapper = mount(<Form />); 
        wrapper.find('form').simulate('submit'); 
        expect(wrapper.contains("A value is required")).toEqual(true); 
    }); 
    it('does not dispatch onAdd props if input has length > 12', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<Form  onAdd={spy} />); 
        wrapper.find('.form-input').instance().value = "xxxxxxxxxxxxxx"; 
        wrapper.find('form').simulate('submit'); 
        expect(wrapper.find('.form-input').instance().value).toEqual('xxxxxxxxxxxxxx'); 
        expect(spy).not.toHaveBeenCalled(); 
    }); 
    it('displays error message if input is over 12 characters', () => {
        const wrapper = mount(<Form />); 
        wrapper.find('.form-input').instance().value = "xxxxxxxxxxxxxx";         
        wrapper.find('form').simulate('submit'); 
        expect(wrapper.contains("12 character limit")).toEqual(true); 
    });
});