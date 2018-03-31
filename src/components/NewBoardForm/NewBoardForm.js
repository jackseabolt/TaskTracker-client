import React from 'react'; 
import { connect } from 'react-redux';
import { createBoard } from '../../actions/mainActions'; 
import './NewBoardForm.css'; 

export class NewBoardForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            message: null
        }
    }

    handleSubmit(event) {
        event.preventDefault(); 
        const name = this.input.value
        const user_id = this.props.currentUser.id

        if(name.length < 1) {
            return this.setState({ message: "A value is required"})
        }
        if(name.length > 12) {
            return this.setState({ message: "12 character limit"})
        }
        this.props.dispatch(createBoard(name, user_id))
        this.input.value = ""; 
        this.setState({ message: null });
    }
    
    render() {

        let validation; 
        if(this.state.message) {
           validation = <p className="form-validation">{this.state.message}</p>
        }

        return (
            <form onSubmit={e => this.handleSubmit(e)} className="new-board-form">
                <input 
                    className="g-input" 
                    placeholder="Board title"
                    ref={input => this.input = input} 
                />
                 { validation }
                <button className="g-button" type="submit">Create</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(NewBoardForm); 

