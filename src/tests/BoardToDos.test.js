import React from 'react'; 
import BoardToDos from '../components/BoardToDos/BoardToDos'; 
import { shallow, mount } from 'enzyme'; 
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'; 
import BoardToDoItem from '../components/BoardToDoItem/BoardToDoItem';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
    boards: [{id: 1, todos: [{value: 'example'}]}],
    currentBoardId: 1 
}
const store = mockStore(initialState);

describe('BoardToDos', () => {
    it('renders without crashing', () => {
        shallow(<Provider store={store}><BoardToDos /></Provider>); 
    }); 
    it('renders BoardCompletedItem without crashing', () => {
        const wrapper = mount(<Provider store={store}><BoardToDos /></Provider>); 
        expect(wrapper.contains(<BoardToDoItem 
            item={{value: 'example'}} 
            key={0} 
        />)).toEqual(true); 
    }); 
}); 