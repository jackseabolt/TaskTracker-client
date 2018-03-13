import React from 'react'; 
import { shallow } from 'enzyme'; 
import Completed from '../components/Completed/Completed'; 

describe('Completed', () => {
    it('renders without crashing', () => {
        shallow(<Completed />); 
    });
}); 