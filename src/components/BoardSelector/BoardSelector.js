import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteBoard } from '../../actions/mainActions'; 
import './BoardSelector.css'; 

export class BoardSelector extends React.Component {
    
    handleDelete() {
        const user_id = this.props.currentUser.id;
        const board_id = this.props.board.id;
        this.props.dispatch(deleteBoard(user_id, board_id)); 
    }

    render() {
        return (
            <section className="board-selector">
                <div>
                    <p className="board-selector-p">{this.props.board.name}</p>
                    <button className="board-selector-delete-button" onClick={() => this.handleDelete()}>Delete</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(BoardSelector); 