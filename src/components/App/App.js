import React, { Component } from 'react';
import Demo from '../Demo/Demo'; 
import Header from '../Header/Header';
import Home from '../Home/Home'; 
import Login from '../Login/Login';  
import { Route } from 'react-router-dom';   

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/demo' component={Demo} />
      </div>
    );
  }
}

export default App;
