import React, { Component } from 'react';
import Demo from '../Demo/Demo'; 
import Header from '../Header/Header';
import Home from '../Home/Home'; 
import Login from '../Login/Login';  
import Navigation from '../Navigation/Navigation'; 
import { refreshAuthToken } from '../../actions/mainActions';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
  

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }
      clearInterval(this.refreshInterval);
  }

  render() {

    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/demo' component={Demo} />
        <Route exact path='/navigation' component={Navigation} />      
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
