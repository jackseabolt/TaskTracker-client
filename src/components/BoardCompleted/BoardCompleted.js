import React from 'react'; 
import BoardCompletedItem from '../BoardCompletedItem/BoardCompletedItem';
import { connect } from 'react-redux';  

export class BoardCompleted extends React.Component {
    render() {

        const myBoard = this.props.boards.find(board => board.id === this.props.currentBoardId);  
        const items = myBoard.completed.map((item, key) => (
            <BoardCompletedItem  
                item={item} 
                key={key} 
            />
        )); 

        return (
            <section className="g-column">
                <div className="g-item-title">
                    <h3 className="g-title">Completed</h3>
                </div>
                { items }
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentBoardId: state.currentBoardId,
    boards: state.boards
})

export default connect(mapStateToProps)(BoardCompleted); 
