import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import ToDos from '../../components/ToDos/ToDos'; 
import Header from '../../components/Header/Header'; 
import ToDoItem from '../../components/ToDoItem/ToDoItem'; 

describe('ToDos', () => {
    it('renders without crashing', () => {
        shallow(<ToDos items={[]}/>); 
    });
    it('displays title', () => {
        const toDos = shallow(<ToDos items={[]} />);
        expect(toDos.contains(<h3 className="g-title">Tasks</h3>)).toEqual(true);   
    });
    it('displays ToDoItem if passed props', () => {
        const wrapper = shallow(<ToDos items={['example']} />);
        expect(wrapper.find('ToDoItem').exists()).toEqual(true);   
    });
    it('does not display ToDoItem if not passed props', () => {
        const wrapper = shallow(<ToDos items={[]} />);
        expect(wrapper.find('ToDoItem').exists()).toEqual(false);   
    });
});