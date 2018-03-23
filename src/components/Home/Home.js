import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <h1>Home</h1>
                <Link to='/demo'><button className="g-button">Demo</button></Link>
            </div>
        )
    }
}