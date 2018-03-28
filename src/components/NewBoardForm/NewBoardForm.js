import React from 'react'; 
import { connect } from 'react-redux';
import { createBoard } from '../../actions/mainActions'; 

export class NewBoardForm extends React.Component {
    
    handleSubmit(event) {
        event.preventDefault(); 
        const name = this.input.value
        const user_id = this.props.currentUser.id
        console.log(name, user_id)
        this.props.dispatch(createBoard(name, user_id))
        this.input.value = ""
    }
    
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input 
                    className="g-input" 
                    placeholder="Title your new board"
                    ref={input => this.input = input} 
                />
                <button className="g-button" type="submit">Create</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
}); 

export default connect(mapStateToProps)(NewBoardForm); 

