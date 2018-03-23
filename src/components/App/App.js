import React, { Component } from 'react';
import Demo from '../Demo/Demo'; 
import Header from '../Header/Header';
import Home from '../Home/Home'; 
import Login from '../Login/Login';  
import { Route } from 'react-router-dom';   

class App extends Component {

  constructor() {
    super(); 
    this.state={
      loggingIn: false
    }
  }

  render() {
    let login; 
    if (this.state.loggingIn) {
      login = <Login />
    }

    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        { login }
        <Route exact path='/demo' component={Demo} />
      </div>
    );
  }
}

export default App;
