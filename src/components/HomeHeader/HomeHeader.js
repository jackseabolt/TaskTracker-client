import React from 'react'; 
import { connect } from 'react-redux'; 
import { toggleLogin, setSignUpFalse, aboutOnToggle } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group'; 
import './HomeHeader.css'; 

export class Header extends React.Component {

    handleLogin() {
        this.props.dispatch(setSignUpFalse()); 
        this.props.dispatch(toggleLogin());
    }

    handleAboutToggle() {
        this.props.dispatch(aboutOnToggle()); 
    }
    
    render() {

        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        }

        return (
            <Transition in={true} timeout={1000} appear={true}>
            {(state) => (
                <header className="home-header" style={{
                    ...transitionStyles[state]
                }} >
                <p className="home-header-login-button" onClick={() => this.handleLogin()}>Login</p> 
                <p className="home-header-about-button" onClick={() => this.handleAboutToggle()}><i className="far fa-info-circle"></i>&nbsp;&nbsp;About</p> 
            </header>
            )}
            </Transition>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
}); 

export default connect(mapStateToProps)(Header); 