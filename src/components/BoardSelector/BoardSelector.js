import React from 'react'; 
import { connect } from 'react-redux'; 
import { deleteBoard, setCurrentBoard } from '../../actions/mainActions'; 
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';  
import './BoardSelector.css'; 

export class BoardSelector extends React.Component {
    
    handleDelete() {
        const user_id = this.props.currentUser.id;
        const board_id = this.props.board.id;
        this.props.dispatch(deleteBoard(user_id, board_id)); 
    }

    handleView() {
        const board_id = this.props.board.id;
        this.props.dispatch(setCurrentBoard(board_id)); 
    }

    render() {

        // transition styles 
        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }

        return (
            <Transition in={true} timeout={200} appear={true}>
            {(state) => (
                <section className="board-selector" style={{  
                    ...transitionStyles[state]
                }} > 
                        <div>
                            <p className="board-selector-p">{this.props.board.name}</p>
                            <button className="board-selector-delete-button" onClick={() => this.handleDelete()}>Delete</button>
                            <Link to='/board'>
                                <button className="board-selector-view-button" onClick={() => this.handleView()}>View</button>
                            </Link>
                        </div>
                    </section>
                )}
            </Transition>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(BoardSelector); 