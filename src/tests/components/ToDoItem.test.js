import React from 'react'; 
import ToDoItem from '../../components/ToDoItem/ToDoItem'; 
import { shallow, mount } from 'enzyme'; 

describe('ToDoItem', () => {
    it('renders without crashing', () => {
        shallow(<ToDoItem />); 
    });
    it('contains close button', () => {
        let wrapper = mount(<ToDoItem />); 
        expect(wrapper.contains(<i className="fas fa-times"></i>)).toEqual(true)        
    }); 
    it('contains check button', () => {
        let wrapper = mount(<ToDoItem />); 
        expect(wrapper.contains(<i className="fas fa-check"></i>)).toEqual(true)        
    }); 
    it('dispatches function passed by onDelete when delete clicked', () => {
        let spy = jest.fn(); 
        let wrapper = mount(<ToDoItem onDelete={spy} />); 
        const deleteButton = wrapper.find('.fa-times');
        deleteButton.simulate('click'); 
        expect(spy).toHaveBeenCalled();  
    }); 
    it('dispatches function passed by onCheck when check clicked', () => {
        let spy = jest.fn(); 
        let wrapper = mount(<ToDoItem onCheck={spy} />); 
        const checkButton = wrapper.find('.fa-check');
        checkButton.simulate('click'); 
        expect(spy).toHaveBeenCalled();  
    }); 
    it('displays item', () => {
        let wrapper = mount(<ToDoItem item={'test'} />); 
        expect(wrapper.contains('test')).toEqual(true); 
    }); 
}); 