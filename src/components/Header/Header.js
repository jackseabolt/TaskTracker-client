import React from 'react'; 
import Login from '../Login/Login'; 
import './Header.css'; 
import { connect } from 'react-redux'; 
import { toggleLogin, logOut, setSignUpFalse } from '../../actions/mainActions'; 
import { Link } from 'react-router-dom'; 

export class Header extends React.Component {

    handleLogin() {
        this.props.dispatch(setSignUpFalse()); 
        this.props.dispatch(toggleLogin());
    }

    handleLogout() {
        this.props.dispatch(logOut());
    }
    
    render() {

        let login; 
        if (this.props.loggingIn) {
          login = <Login />
        }

        let authButton; 
        if (!this.props.currentUser) {
            authButton = <button id="header-login" className="g-button header-button" onClick={() => this.handleLogin()}>Login</button> 
        } 
        else {
            authButton = <button id="header-logout" className="g-button header-button" onClick={() => this.handleLogout()}>Log Out</button> 
        }

        return (
            <header className="header">
                <Link to='/'><h3 className="header-logo">TaskTracker</h3></Link>
                { authButton }
                { login }
            </header>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn, 
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(Header); 