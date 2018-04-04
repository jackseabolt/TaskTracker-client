import React from 'react';
import { App } from '../components/App/App';
import { shallow, mount } from 'enzyme'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import ToDos from '../components/ToDos/ToDos'; 
import Completed from '../components/Completed/Completed'; 
import Header from '../components/Header/Header'; 
import Form from '../components/Form/Form'; 

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<Router><App /></Router>); 
  });
}); 

