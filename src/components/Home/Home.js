import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import './Home.css';

export class Home extends React.Component {
    render() {
        if (this.props.loggedIn) {
            return <Redirect to='/navigation' />
        }

        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        return (
            <div className="home">
                <Transition in={true} timeout={300} appear={true}>
                    {(state) => (
                        <div className="home-container" style={{
                            ...transitionStyles[state]
                        }} >

                            <div className="home-logo-container">
                                <h1 className="home-logo-intro">Welcome to</h1>
                                <h1 className="home-logo">TaskTracker</h1>
                            </div>
                            <Link to='/demo'><button className="home-button">Demo</button></Link>
                        </div>
                    )}
                </Transition>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
});

export default connect(mapStateToProps)(Home); 