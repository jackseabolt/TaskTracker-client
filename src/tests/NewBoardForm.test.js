import React from 'react'; 
import { NewBoardForm } from '../components/NewBoardForm/NewBoardForm'; 
import { shallow, mount } from 'enzyme'; 

describe('NewBoardForm', () => {
    it('renders without crashing', () => {
        shallow(<NewBoardForm />); 
    }); 
    it('dispatches action if form properly filled and props given', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewBoardForm dispatch={spy} currentUser={{id: 1}} />); 
        wrapper.find('.g-input').instance().value = "Example"; 
        wrapper.find('form').simulate('submit'); 
        expect(spy).toHaveBeenCalled();
        expect(wrapper.state().message).toEqual(null);  
    }); 
    it('will not dispatch if form over filled', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewBoardForm dispatch={spy} currentUser={{id: 1}} />); 
        wrapper.find('.g-input').instance().value = ""; 
        wrapper.find('form').simulate('submit'); 
        expect(spy).not.toHaveBeenCalled(); 
        expect(wrapper.contains(<p className="form-validation">A value is required</p>)).toEqual(true); 
        expect(wrapper.state().message).toEqual("A value is required");  
    }); 
    it('will not dispatch if form under filled', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<NewBoardForm dispatch={spy} currentUser={{id: 1}} />); 
        wrapper.find('.g-input').instance().value = "xxxxxxxxxxxxxxx"; 
        wrapper.find('form').simulate('submit'); 
        expect(spy).not.toHaveBeenCalled(); 
        expect(wrapper.contains(<p className="form-validation">12 character limit</p>)).toEqual(true);
        expect(wrapper.state().message).toEqual("12 character limit");  
        
    }); 
}); 