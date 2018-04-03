import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import Login from '../Login/Login'; 
import About from '../About/About'; 
import './Home.css';

export class Home extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            started: false
        }
    }
    
    render() {

        let loginForm; 
        if (this.props.loggingIn) {
          loginForm = <Login />
        }

        let about; 
        if(this.props.aboutOn) {
            about = <About />
        }

        if (this.props.loggedIn) {
            return <Redirect to='/navigation' />
        }

        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        let content; 
        if(this.state.started){
            content = <div><HomeNavigation /></div>
        } else {
            content = <Transition in={true} timeout={300} appear={true}>
            {(state) => (
                <div className="home-container" style={{
                    ...transitionStyles[state]
                }} >

                    <div className="home-logo-container">
                        <h1 className="home-logo-intro">Welcome to</h1>
                        <h1 className="home-logo">TaskTracker</h1>
                    </div>
                    <button className="home-button" onClick={() => this.setState({ started: true })}>Start</button>
                </div>
            )}
            </Transition>
        }

        return (
            <div className="home">
                { content }
                { about }
                { loginForm }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null, 
    loggingIn: state.loggingIn, 
    aboutOn: state.aboutOn
});

export default connect(mapStateToProps)(Home); 