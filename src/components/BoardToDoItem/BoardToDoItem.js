import React from 'react'; 
import { Transition } from 'react-transition-group'; 
import { connect } from 'react-redux'; 
import { deleteToDo, completeToDo } from '../../actions/mainActions'; 

export class BoardToDoItem extends React.Component {
    
    handleDelete() {
        const value = this.props.item.value; 
        const board_id = this.props.currentBoardId; 
        const user_id = this.props.currentUser.id
        this.props.dispatch(deleteToDo(value, board_id, user_id)); 
    }

    handleCheck() {
        const value = this.props.item.value; 
        const board_id = this.props.currentBoardId; 
        const user_id = this.props.currentUser.id
        this.props.dispatch(completeToDo(value, board_id, user_id));  
    }

    render() {

        // react transition group setup data 
        const defaultStyle = {
            width: 'calc(100% - 60px)', 
            padding: '30px', 
            backgroundColor: 'rgb(178, 177, 194)', 
            color: 'white',
            marginTop: '10px', 
            marginBottom: '10px', 
            borderRadius: '5px', 
            transition: `opacity ${300}ms ease-in-out`
        }
        const transitionStyles = {
            entering: { opacity: 0 }, 
            entered: { opacity: 1 }
        }

        return (
            <Transition in={true} timeout={300} appear={true}>
                {(state) => (
                    <div style={{ 
                        ...defaultStyle, 
                        ...transitionStyles[state]
                    }} > 
                        {this.props.item.value} 
                        <div className="g-graphic-button" onClick={() => this.handleDelete()} >
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="g-graphic-button" onClick={() => this.handleCheck()}  >
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

const mapStateToProps = state => ({
    currentBoardId: state.currentBoardId, 
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(BoardToDoItem); 