import React from 'react';
import './Login.css'
import { connect } from 'react-redux'; 
import { toggleLogin } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group';

export class Login extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            signUp: false
        }
    }

    handleClose() {
        this.props.dispatch(toggleLogin()); 
    }

    handleSignUpToggle() {
        this.setState({ signUp: !this.state.signUp})
    }
    
    render() {

        // Transition styles

        const duration = 300;
        const defaultStyle = {
            opacity: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: '100%',
            width: '100%',
            margin: '0px',
            zIndex: 20,
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            transition: `opacity ${duration}ms ease-in-out`
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        // toggle signup options

        let content; 
        if(this.state.signUp) {
            content = <form>
                <h2 className="login-title">Sign Up</h2>
                <input className="login-input" placeholder="username" />
                <input className="login-input" placeholder="password" />
                <button className="login-button">Register</button>
                <p className="login-subtext">Already a member? 
                Log in <span onClick={() => this.handleSignUpToggle()}className="login-link">here</span></p>
            </form>
        } else {
            content = <form>
                <h2 className="login-title">Log in</h2>
                <input className="login-input" placeholder="username" />
                <input className="login-input" placeholder="password" />
                <button className="login-button">Log In</button>
                <p className="login-subtext">Not a member? 
                Sign up <span onClick={() => this.handleSignUpToggle()}className="login-link">here</span></p>
            </form>
        }

        return (
            <Transition in={true} timeout={duration} appear={true}>
                {(state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <div className="login-main">
                            <div onClick={() => this.handleClose()} className="login-close">
                                <i className="fas fa-times login-close-icon"></i>
                            </div>
                           { content }
                           
                        </div>
                    </div>
                )}
            </Transition >
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
}); 

export default connect(mapStateToProps)(Login); 