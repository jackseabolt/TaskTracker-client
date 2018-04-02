import React from 'react';
import './Login.css'
import { connect } from 'react-redux'; 
import { toggleLogin, signUp, login, setSignUpFalse, setSignUpTrue } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group';

export class Login extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            signUp: true
        }
    }

    handleClose() {
        this.props.dispatch(toggleLogin()); 
    }

    handleSignUpTrue() {
        this.props.dispatch(setSignUpTrue()); 
    }

    handleSignUpFalse() {
        this.props.dispatch(setSignUpFalse()); 
    }

    handleSignUp(e) {
        e.preventDefault(); 
        return this.props.dispatch(signUp(this.signupUsername.value, this.signupPassword.value))
            .then(() => this.props.dispatch(login(this.signupUsername.value, this.signupPassword.value)))
            .then(() => this.props.dispatch(toggleLogin()));  
    }

    handleLogin(e) {
        e.preventDefault(); 
        return this.props.dispatch(login(this.loginUsername.value, this.loginPassword.value)) 
        .then(() => this.props.dispatch(toggleLogin())); 
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
        if(this.props.signUp) {
            content = <form onSubmit={e => this.handleSignUp(e)}>
                <h2 className="login-title">Sign Up</h2>
                <input 
                    className="login-input" 
                    placeholder="username" 
                    ref={input => this.signupUsername = input}
                />
                <input 
                    className="login-input" 
                    placeholder="password"
                    ref={input => this.signupPassword = input} 
                />
                <button className="login-button">Register</button>
                <p className="login-subtext">Already a member? 
                Log in <span onClick={() => this.handleSignUpFalse()}className="login-link">here</span></p>
            </form>
        } else {
            content = <form onSubmit={e => this.handleLogin(e)}>
                <h2 className="login-title">Log in</h2>
                <input 
                    className="login-input" 
                    placeholder="username" 
                    ref={input => this.loginUsername = input}
                />
                <input 
                    className="login-input" 
                    placeholder="password" 
                    ref={input => this.loginPassword = input}
                />
                <button className="login-button">Log In</button>
                <p className="login-subtext">Not a member? 
                Sign up <span onClick={() => this.handleSignUpTrue()}className="login-link">here</span></p>
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
    loggingIn: state.loggingIn, 
    signUp: state.signUp
}); 

export default connect(mapStateToProps)(Login); 