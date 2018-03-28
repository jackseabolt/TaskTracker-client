import React from 'react';
import NewBoardForm from '../NewBoardForm/NewBoardForm'; 
import BoardSelector from '../BoardSelector/BoardSelector'; 
import './Navigation.css'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import { getUserBoards } from '../../actions/mainActions';  

export class Navigation extends React.Component {
    componentDidMount() {
        
    }
    
    render() {
        const boards = this.props.boards.map((board, key) => (
            <BoardSelector key={key} name={board.name} id={board.id}/>   
        )); 

        if(!this.props.loggedIn) {
            return <Redirect to='/' />
        }

        return (
            <div className="navigation">
                <h1>Navigation</h1>
                <h4>Welcome {this.props.currentUser}</h4>
                <NewBoardForm />
                <section className="navigation-panel">
                    { boards }
                </section>
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

