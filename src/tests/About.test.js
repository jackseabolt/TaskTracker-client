import React from 'react'; 
import { About } from '../components/About/About'; 
import { shallow, mount } from 'enzyme'; 

describe('About', () => {
    it('renders without crashing', () => {
        shallow(<About />); 
    }); 
    it('dispatches an action when .about-close is clicked', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<About dispatch={spy} />); 
        wrapper.find('.about-close').simulate('click');
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('contains expected content', () => {
        const wrapper = mount(<About />); 
        expect(wrapper.find('.about-title').exists()).toEqual(true); 
    }); 
}); 