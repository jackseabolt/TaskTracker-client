import React from 'react'; 
import { BoardForm } from '../components/BoardForm/BoardForm'; 
import { shallow, mount } from 'enzyme'; 

describe('BoardForm', () => {
    it('renders without crashing', () => {
        shallow(<BoardForm />)
    }); 
    it('it has state message of null initially', () => {
        const wrapper = shallow(<BoardForm />); 
        expect(wrapper.state('message')).toEqual(null); 
    }); 
    // it('dispatches action if inputs are filled in', () => {
    //     const spy = jest.fn(); 
    //     const wrapper = mount(<BoardForm dispatch={spy} />); 
    //     wrapper.instance(); 
    //     wrapper.find('.board-form-input').simulate('change', { target: { value: 'Hello' } })
    //     wrapper.find('#submit').simulate('click'); 
    //     expect(spy).toHaveBeenCalled();
    // });
}); 