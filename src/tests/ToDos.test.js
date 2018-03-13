import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import ToDos from '../components/ToDos/ToDos'; 
import ToDoItem from '../components/ToDoItem/ToDoItem'; 

describe('ToDos', () => {
    it('renders without crashing', () => {
        shallow(<ToDos />); 
    });
    it('displays all ToDo items passed as props', () => {
        const items = ['example1', 'example2']; 
        const toDos = mount(<ToDos items={items} />);
        expect(toDos.contains(<ToDoItem />)).toEqual(true);   
    });
});