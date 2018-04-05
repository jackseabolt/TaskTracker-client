import React from 'react'; 
import { BoardForm } from '../../components/BoardForm/BoardForm'; 
import { shallow, mount } from 'enzyme'; 

describe('BoardForm', () => {
    it('renders without crashing', () => {
        shallow(<BoardForm />)
    }); 
    it('it has state message of null initially', () => {
        const wrapper = shallow(<BoardForm />); 
        expect(wrapper.state('message')).toEqual(null); 
    }); 
}); 