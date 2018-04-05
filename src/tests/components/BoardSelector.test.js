import React from 'react'; 
import { BoardSelector } from '../../components/BoardSelector/BoardSelector'; 
import { shallow, mount } from 'enzyme'; 
import { BrowserRouter as Router } from 'react-router-dom'; 


describe('BoardSelector', () => {
    it('renders without crashing', () => {
        shallow(<BoardSelector />); 
    }); 
    it('displays content passed through props', () => {
        const board = {name: 'example'}; 
        const wrapper = mount(<Router><BoardSelector board={board} /></Router>); 
        expect(wrapper.contains(<p className="board-selector-p">example</p>)).toEqual(true); 
    }); 
    it('dispatches action when .board-selector-delete-button is pressed', () => {
        const spy = jest.fn();
        const board = {name: 'example', id: 2}; 
        const currentUser = {id: 2};  
        const wrapper = mount(<Router>
                <BoardSelector 
                    dispatch={spy} 
                    board={board} 
                    currentUser={currentUser}
                />
            </Router>); 
        wrapper.find('.board-selector-delete-button').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
    it('dispatches action when board-selector-view-button is pressed', () => {
        const spy = jest.fn();
        const board = {name: 'example', id: 2}; 
        const wrapper = mount(<Router>
                <BoardSelector 
                    dispatch={spy} 
                    board={board} 
                />
            </Router>); 
        wrapper.find('.board-selector-view-button').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
});