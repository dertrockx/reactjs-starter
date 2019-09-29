import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

class Todos extends Component {
    render() {
        let todos = this.props.todos;
        return todos.map( todo => (
            <TodoItem 
                key={ todo.id }
                todo={todo} 
                markComplete={ this.props.markComplete }
                delTodo={ this.props.delTodo }
            />
        ))
    }
}

export default Todos;