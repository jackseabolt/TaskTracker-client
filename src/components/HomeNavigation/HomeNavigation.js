import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { toggleLogin, setSignUpTrue } from '../../actions/mainActions'; 
import './HomeNavigation.css'; 

export class HomeNavigation extends React.Component {

    handleLogin() {
        this.props.dispatch(setSignUpTrue()); 
        this.props.dispatch(toggleLogin());
    }

    render() {
        
        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        return (
            <Transition in={true} timeout={300} appear={true}>
            {(state) => (
                    <div className="home-navigation-container" style={{
                        ...transitionStyles[state]
                    }} >
                        <div className="home-navigation">
                            <div className="home-navigation-top"> 
                                <h2 className="home-navigation-logo">Get Started</h2>
                            </div>
                            <div className="home-navigation-half left">
                                <p>Just visiting? Try a demo account!</p>
                                <Link to='/demo'><button className="home-navigation-button">Demo</button></Link>
                            </div>
                            <div className="home-navigation-half">
                                <p>Create a free account and get started today</p>
                                <button className="home-navigation-button" onClick={() => this.handleLogin()}>Register</button>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(HomeNavigation); 