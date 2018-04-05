import React from 'react'; 
import { BoardCompletedItem } from '../../components/BoardCompletedItem/BoardCompletedItem'; 
import { shallow, mount } from 'enzyme'; 

describe('BoardCompletedItem', () => {
    it('renders without crashing', () => {
        shallow(<BoardCompletedItem />); 
    });
    it('contains value of item passed to it', () => {
        const item = {value: 'example'}; 
        const wrapper = mount(<BoardCompletedItem item={item} />)
        expect(wrapper.contains('example')).toEqual(true); 
    }); 
    it('dispatches action when g-graphic-button is clicked', () => {
        const spy = jest.fn(); 
        const currentUser = {id: 2};  
        const item = {value: 'example'};
        const wrapper = mount(<BoardCompletedItem 
            item={item} 
            dispatch={spy}
            currentUser={currentUser} 
        />); 
        wrapper.instance(); 
        wrapper.find('.g-graphic-button').simulate('click'); 
        expect(spy).toHaveBeenCalled(); 
    }); 
}); 