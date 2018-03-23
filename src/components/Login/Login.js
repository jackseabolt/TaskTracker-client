import React from 'react';
import './Login.css'
import { connect } from 'react-redux'; 
import { toggleLogin } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group';

export class Login extends React.Component {
    
    handleClose() {
        this.props.dispatch(toggleLogin()); 
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
                            <h2 className="login-title">Login</h2>
                            <p className="lgin-p">So you think you know about {this.props.title}? This quiz contains {this.props.quizLength} questions that will test your knowledge.<br /><br />
                                Good luck!</p>
                            <button className="login-button">Start</button>
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