import React from 'react';
import './Form.css';  

export default class Form extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            message: null
        }
    }
    handleForm(e) {
        e.preventDefault();
        if(this.input.value.length < 1) {
            return this.setState({ message: "A value is required"})
        }
        if(this.input.value.length > 12) {
            return this.setState({ message: "12 character limit"})
        }
        this.props.onAdd(this.input.value) 
        this.input.value = ""; 
        this.setState({ message: null })
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
                            className="form-input" 
                            type="text" 
                            placeholder="New Task"
                            ref={input => this.input = input} 
                        />
                        { validation }
                        <button className="form-button">Add</button>
                    </form>
                </div>
            </ section> 
        )
    }
}