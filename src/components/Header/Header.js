import React from 'react'; 
import Login from '../Login/Login'; 
import './Header.css'; 
import { connect } from 'react-redux'; 
import { toggleLogin } from '../../actions/mainActions'; 

export class Header extends React.Component {

    handleLogin() {
        this.props.dispatch(toggleLogin())
    }
    
    render() {

        let login; 
        if (this.props.loggingIn) {
          login = <Login />
        }

        return (
            <header>
                <h3 className="header-logo">TaskTracker</h3>
                <h4 className="header-logo" onClick={() => this.handleLogin()}>Login</h4>
                { login }
            </header>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
}); 

export default connect(mapStateToProps)(Header); 