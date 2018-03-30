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
            <BoardSelector key={key} board={board} />   
        )); 

        if(!this.props.loggedIn) {
            return <Redirect to='/' />
        }

        return (
            <div className="navigation">
                <section className="navigation-panel-left">
                    <h2>Create Board</h2>
                    <NewBoardForm />
                </section>
                <section className="navigation-panel-right">
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

