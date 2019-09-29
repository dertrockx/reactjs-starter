import React, { Component } from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Go to work',
        done: false
      },
      {
        id: 2,
        title: 'Take a bath',
        done: false
      },
      {
        id: 3,
        title: 'Pick up kids',
        done: false
      },
    ]
  }

  markComplete = (id) => (
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id){
          todo.done = !todo.done
        }
        return todo
      })
    })
  )

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id)
    });
  }

  addTodo = (title) => {
    let lastID = 0;
    if (this.state.todos.length > 0){
      lastID = this.state.todos[this.state.todos.length-1].id; 
    }
    const newID = lastID + 1;
    const newTodo = {
      id: newID,
      title: title,
      done: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App" style={ container }>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo = { this.delTodo }
        />
      </div>
    );
  }
}

const container = {
  padding: '1em'
}

export default App;
