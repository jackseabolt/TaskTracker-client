import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import  BoardCompleted  from '../../components/BoardCompleted/BoardCompleted'; 
import BoardCompletedItem from '../../components/BoardCompletedItem/BoardCompletedItem';
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('BoardCompleted', () => {
    it('renders without crashing', () => {
        const initialState = {
            boards: [{id: 1, completed: ['example']}],
            currentBoardId: 1 
        }
        const store = mockStore(initialState)
        shallow(<Provider store={store}><BoardCompleted /></Provider>); 
    }); 
    it('renders BoardCompletedItem without crashing', () => {
        const initialState = {
            boards: [{id: 1, completed: [{value: 'example'}]}],
            currentBoardId: 1 
        }
        const store = mockStore(initialState)
        const wrapper = mount(<Provider store={store}><BoardCompleted /></Provider>); 
        expect(wrapper.contains(<BoardCompletedItem 
            item={{value: 'example'}} 
            key={0} 
        />)).toEqual(true); 
    }); 
}); 
