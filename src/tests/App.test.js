import React from 'react';
import App from '../components/App/App';
import { shallow } from 'enzyme'; 
import ToDos from '../components/ToDos/ToDos'; 
import Completed from '../components/Completed/Completed'; 
import Header from '../components/Header/Header'; 
import Form from '../components/Form/Form'; 

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />); 
  });
//   it('contains <ToDos />', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.find(ToDos).exists()).toEqual(true); 
//   }); 
//   it('contains <Completed />', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Completed).exists()).toEqual(true); 
//   }); 
//   it('contains <Header />', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Header).exists()).toEqual(true); 
//   }); 
//   it('contains <Form />', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Form).exists()).toEqual(true); 
//   }); 
//   it('has pre-loaded ToDos state', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 1', 
//       'Example 2', 
//       'Example 3'
//     ]); 
//   }); 
//   it('has pre-loaded Completed state', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('Completed')).toEqual(['Example 4']); 
//   }); 
//   it('adds to ToDos with handleAdd', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 1', 
//       'Example 2', 
//       'Example 3'
//     ]);
//     wrapper.instance().handleAdd('test'); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 1', 
//       'Example 2', 
//       'Example 3', 
//       'test'
//     ]); 
//   }); 
//   it('deletes value in ToDos with handleDelete', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 1', 
//       'Example 2', 
//       'Example 3'
//     ]); 
//     wrapper.instance().handleDelete('Example 1'); 
//     expect(wrapper.state('ToDos')).toEqual(['Example 2', 'Example 3']); 
//   }); 
//   it('deletes value in Completed with handleDeleteComplete', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('Completed')).toEqual(['Example 4']); 
//     wrapper.instance().handleDeleteComplete('Example 4'); 
//     expect(wrapper.state('Completed')).toEqual([]); 
//   }); 
//   it('moves value from ToDos to Completed when passed to handleCheck', () => {
//     const wrapper = shallow(<App />); 
//     expect(wrapper.state('Completed')).toEqual(['Example 4']); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 1', 
//       'Example 2', 
//       'Example 3'
//     ]);
//     wrapper.instance().handleCheck("Example 1"); 
//     expect(wrapper.state('Completed')).toEqual(['Example 4', 'Example 1']); 
//     expect(wrapper.state('ToDos')).toEqual([
//       'Example 2', 
//       'Example 3'
//     ]);
//   }); 
}); 

