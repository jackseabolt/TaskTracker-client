import React from 'react';
import App from '../components/App/App';
import { shallow, mount } from 'enzyme'; 
import ToDos from '../components/ToDos/ToDos'; 
import Completed from '../components/Completed/Completed'; 

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />); 
  });
  // it('contains <ToDos />', () => {
  //   const app = shallow(<App />); 
  //   expect(app.contains(<ToDos/>)).toEqual(true); 
  // }); 
  // it('contains <Completed />', () => {
  //   const app = shallow(<App />);
  //   expect(app.contains(<Completed />)).toEqual(true); 
  // }); 
}); 

