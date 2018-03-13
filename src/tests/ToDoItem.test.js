import React from 'react'; 
import ToDoItem from '../components/ToDoItem/ToDoItem'; 
import { shallow } from 'enzyme'; 

describe('ToDoItem', () => {
    it('renders without crashing', () => {
        shallow(<ToDoItem />); 
    }); 
}); 