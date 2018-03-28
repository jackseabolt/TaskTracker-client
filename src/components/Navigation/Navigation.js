import React from 'react';
import NewBoardForm from '../NewBoardForm/NewBoardForm'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import { getUserBoards } from '../../actions/mainActions';  

export class Navigation extends React.Component {
    componentDidMount() {
        
    }
    
    render() {

        const boards = this.props.boards.map((board, key) => (
            <div key={key} >   
                <h4>{board.name}</h4>
            </div>
        )); 

        if(!this.props.loggedIn) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1>Navigation</h1>
                <h4>Welcome {this.props.currentUser}</h4>
                <NewBoardForm />
                { boards }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    boards: state.boards,
    loggedIn: state.currentUser !== null, 
    currentUser: state.currentUser ? state.currentUser.username : null
}); 

export default connect(mapStateToProps)(Navigation)

