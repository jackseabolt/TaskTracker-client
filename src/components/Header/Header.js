import React from 'react'; 
import Login from '../Login/Login'; 
import './Header.css'; 
import { connect } from 'react-redux'; 
import { toggleLogin } from '../../actions/mainActions'; 
import { Link } from 'react-router-dom'; 

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
                <Link to='/'><h3 className="header-logo">TaskTracker</h3></Link>
                <button className="g-button header-button" onClick={() => this.handleLogin()}>Login</button>
                { login }
            </header>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
}); 

export default connect(mapStateToProps)(Header); 