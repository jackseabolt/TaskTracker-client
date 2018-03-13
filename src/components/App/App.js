import React, { Component } from 'react';
import ToDos from '../ToDos/ToDos'; 
import Form from '../Form/Form';
import Completed from '../Completed/Completed'; 
import Header from '../Header/Header';  
import './App.css';

class App extends Component {
  constructor() {
    super(); 
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
    return (
      <div>
        <Header />
        <div className="App">
            <Form onAdd={value => this.handleAdd(value)}/>
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
      </div>
    );
  }
}

export default App;
