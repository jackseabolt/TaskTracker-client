import React from 'react'; 
import ToDoItem from '../ToDoItem/ToDoItem';

export default class ToDos extends React.Component {
    render() {
        const toDoItems = this.props.items.map((item, key) => (
            <ToDoItem 
                item={item} 
                key={key} 
                onDelete={value => this.props.onDelete(value)}
                onCheck={value => this.props.onCheck(value)}
            />
        )); 

        return (
            <section className="g-column"> 
                <div className="g-item-title">
                    <h3 className="g-title">Tasks</h3>
                </div>
                { toDoItems }   
            </section>
        )
    }
}