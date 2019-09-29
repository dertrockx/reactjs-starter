import React, { Component } from 'react'

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    render() {
        let title = this.props.todo.title;
        let id = this.props.todo.id;
        return (
            <div style={todoItemStyle}>
                <p style={this.getStyle()}>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} 
                    />
                    { title }
                    <button 
                        onClick={this.props.delTodo.bind(this, id)}
                        style={ btn }
                    >
                        X
                    </button>
                </p>
            </div>
        )
    }
}

const todoItemStyle = {
    backgroundColor: '#f5f5f5',
    padding: '0.5em 1em'
}

const btn = {
    padding: '10px',
    borderRadius: '50%',
    color: 'white',
    background: 'red',
    float: 'right',
    border: '0',
    boxShadow: '5px 10px #888888'
}
export default TodoItem;