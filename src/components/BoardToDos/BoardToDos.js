import React from 'react'; 
import BoardToDoItem from '../BoardToDoItem/BoardToDoItem';
import { connect } from 'react-redux'; 

export class ToDos extends React.Component {
    render() {

        const myBoard = this.props.boards.find(board => board.id === this.props.currentBoardId);  
        const toDoItems = myBoard.todos.map((item, key) => (
            <BoardToDoItem 
                item={item} 
                key={key} 
            />
        )); 

        return (
            <section className="g-column"> 
                <div className="g-item-title">
                    <h3 className="g-title">Tasks</h3>
                </div>
                { toDoItems }   
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentBoardId: state.currentBoardId,
    boards: state.boards
}); 

export default connect(mapStateToProps)(ToDos); 