import React from 'react'; 
import { connect } from 'react-redux'; 
import { Link, Redirect } from 'react-router-dom'; 
import './Home.css'; 

export class Home extends React.Component {
    render() {
        if(this.props.loggedIn) {
            return <Redirect to='/navigation' />
        }
        return (
            <div className="home">
                <h1>Home</h1>
                <Link to='/demo'><button className="g-button">Demo</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
}); 

export default connect(mapStateToProps)(Home); 