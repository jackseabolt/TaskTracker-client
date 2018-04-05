import React from 'react'; 
import { shallow, mount } from 'enzyme'; 
import { Demo } from '../../components/Demo/Demo'; 
import ToDos from '../../components/ToDos/ToDos'; 
import Completed from '../../components/Completed/Completed'; 
import Header from '../../components/Header/Header'; 
import Form from '../../components/Form/Form'; 

describe('Demo', () => {
    it('renders without crashing', () => {
        shallow(<Demo />); 
    }); 
      it('contains <ToDos />', () => {
    const wrapper = mount(<Demo />); 
    expect(wrapper.find(ToDos).exists()).toEqual(true); 
  }); 
  it('contains <Completed />', () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper.find(Completed).exists()).toEqual(true); 
  }); 
  it('contains <Form />', () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper.find(Form).exists()).toEqual(true); 
  }); 
  it('has pre-loaded ToDos state', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 1', 
      'Example 2', 
      'Example 3'
    ]); 
  }); 
  it('has pre-loaded Completed state', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('Completed')).toEqual(['Example 4']); 
  }); 
  it('adds to ToDos with handleAdd', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 1', 
      'Example 2', 
      'Example 3'
    ]);
    wrapper.instance().handleAdd('test'); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 1', 
      'Example 2', 
      'Example 3', 
      'test'
    ]); 
  }); 
  it('deletes value in ToDos with handleDelete', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 1', 
      'Example 2', 
      'Example 3'
    ]); 
    wrapper.instance().handleDelete('Example 1'); 
    expect(wrapper.state('ToDos')).toEqual(['Example 2', 'Example 3']); 
  }); 
  it('deletes value in Completed with handleDeleteComplete', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('Completed')).toEqual(['Example 4']); 
    wrapper.instance().handleDeleteComplete('Example 4'); 
    expect(wrapper.state('Completed')).toEqual([]); 
  }); 
  it('moves value from ToDos to Completed when passed to handleCheck', () => {
    const wrapper = shallow(<Demo />); 
    expect(wrapper.state('Completed')).toEqual(['Example 4']); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 1', 
      'Example 2', 
      'Example 3'
    ]);
    wrapper.instance().handleCheck("Example 1"); 
    expect(wrapper.state('Completed')).toEqual(['Example 4', 'Example 1']); 
    expect(wrapper.state('ToDos')).toEqual([
      'Example 2', 
      'Example 3'
    ]);
  }); 
}); 