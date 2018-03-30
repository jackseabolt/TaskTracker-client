import React from 'react'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BoardForm from '../BoardForm/BoardForm';
import BoardToDos from '../BoardToDos/BoardToDos';   
import BoardCompleted from '../BoardCompleted/BoardCompleted'; 
import './Board.css';  

export class Board extends React.Component {
    render() {

        if(!this.props.currentBoardId) {
            return (
                <Redirect to="/navigation" />
            )
        }
        return (
            <div className="board">
                <BoardForm />
                <BoardToDos />
                <BoardCompleted />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentBoardId: state.currentBoardId
}); 

export default connect(mapStateToProps)(Board); 

