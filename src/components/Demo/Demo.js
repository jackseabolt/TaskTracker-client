import React from 'react';
import ToDos from '../ToDos/ToDos'; 
import Form from '../Form/Form';
import Completed from '../Completed/Completed'; 
import Header from '../Header/Header'; 
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import './Demo.css'; 

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDos: [
                'Example 1',
                'Example 2',
                'Example 3'
            ],
            Completed: [
                'Example 4'
            ]
        }
    }

    handleAdd(value) {
        const newTodos = this.state.ToDos.slice();
        newTodos.push(value);
        this.setState({
            ToDos: newTodos
        });
    }

    handleDelete(value) {
        const idx = this.state.ToDos.indexOf(value);
        let newToDos = this.state.ToDos.slice(0, idx).concat(this.state.ToDos.slice(idx + 1));
        this.setState({
            ToDos: newToDos
        });
    }

    handleDeleteComplete(value) {
        const idx = this.state.Completed.indexOf(value);
        let newCompleted = this.state.Completed.slice(0, idx).concat(this.state.Completed.slice(idx + 1));
        this.setState({
            Completed: newCompleted
        });
    }

    handleCheck(value) {
        const idx = this.state.ToDos.indexOf(value);
        let newToDos = this.state.ToDos.slice(0, idx).concat(this.state.ToDos.slice(idx + 1));
        let newCompleted = this.state.Completed.slice()
        newCompleted.push(value)
        this.setState({
            ToDos: newToDos,
            Completed: newCompleted
        });
    }

    render() {
        if(this.props.loggedIn) {
            return <Redirect to='/navigation' />
        }
        return (
            <div className="Demo">
                <Form onAdd={value => this.handleAdd(value)} />
                <ToDos
                    items={this.state.ToDos}
                    onDelete={value => this.handleDelete(value)}
                    onCheck={value => this.handleCheck(value)}
                />
                <Completed
                    items={this.state.Completed}
                    onDelete={value => this.handleDeleteComplete(value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
});

export default connect(mapStateToProps)(Demo);