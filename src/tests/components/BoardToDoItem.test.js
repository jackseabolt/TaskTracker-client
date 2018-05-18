import React from 'react'; 
import { BoardToDoItem } from '../../components/BoardToDoItem/BoardToDoItem'; 
import { shallow, mount } from 'enzyme'; 

describe('BoardToDoItem', () => {
    it('renders without crashing', () => {
        shallow(<BoardToDoItem />); 
    });
    it('contains value of item passed to it', () => {
        const item = {value: 'example'}; 
        const wrapper = mount(<BoardToDoItem item={item} />)
        expect(wrapper.contains('example')).toEqual(true); 
    }); 
    it('dispatches action when .fa-times is clicked', () => {
        const spy = jest.fn(); 
        const currentUser = {id: 2};  
        const item = {value: 'example'};
        const wrapper = mount(<BoardToDoItem 
            item={item} 
            dispatch={spy}
            currentUser={currentUser} 
        />); 
        wrapper.instance(); 
        wrapper.find('.fa-times').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('dispatches action when .fa-check is clicked', () => {
        const spy = jest.fn(); 
        const currentUser = {id: 2};  
        const item = {value: 'example'};
        const wrapper = mount(<BoardToDoItem 
            item={item} 
            dispatch={spy}
            currentUser={currentUser} 
        />); 
        wrapper.instance(); 
        wrapper.find('.fa-check').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
}); 

