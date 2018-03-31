import React from 'react';
import './BoardForm.css'; 
import { connect } from 'react-redux'; 
import { addToDo } from '../../actions/mainActions';  

export class BoardForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            message: null
        }
    }
    handleForm(e) {
        e.preventDefault();
        const value = this.input.value; 
        const board_id = this.props.currentBoardId;
        const user_id = this.props.currentUser.id
        if(value.length < 1) {
            return this.setState({ message: "A value is required"})
        }
        if(value.length > 12) {
            return this.setState({ message: "12 character limit"})
        }
        this.props.dispatch(addToDo(value, board_id, user_id))
        this.input.value = ""; 
        this.setState({ message: null });
    }
    
    render() {

        let validation; 
        if(this.state.message) {
           validation = <p className="form-validation">{this.state.message}</p>
        }

        return (
            <section className="g-column"> 
                <div className="g-item-title">
                    <h3 className="g-title">Add Task</h3>
                </div>
                <div className="g-item">
                    <form onSubmit={e => this.handleForm(e)}>
                        <input 
                            className="board-form-input" 
                            type="text" 
                            placeholder="New Task"
                            ref={input => this.input = input} 
                        />
                        { validation }
                        <button className="g-button">Add</button>
                    </form>
                </div>
            </ section> 
        )
    }
}

const mapStateToProps = state => ({
    currentBoardId: state.currentBoardId,
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(BoardForm); 