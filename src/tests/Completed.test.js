import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import Completed from '../components/Completed/Completed';
import CompletedItem from '../components/CompletedItem/CompletedItem';  

describe('Completed', () => {
    it('renders without crashing', () => {
        shallow(<Completed items={[]} />); 
    });
    it('displays title', () => {
        const wrapper = shallow(<Completed items={[]} />); 
        expect(wrapper.contains('Completed')).toEqual(true); 
    });
    it('contains CompletedItem when passed items as props', () => {
        const wrapper = mount(<Completed items={['test']} />);
        expect(wrapper.find(CompletedItem).exists()).toEqual(true);  
    });
    it('does not contain CompletedItem when passed no items as props', () => {
        const wrapper = mount(<Completed items={[]} />);
        expect(wrapper.find(CompletedItem).exists()).toEqual(false);  
    });
}); 