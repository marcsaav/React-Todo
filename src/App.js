import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  handleToggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  addTodo = (task) => {
    let newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState(
      {todos: [...this.state.todos,
      newTodo]}
    )
  }

  clearTodos = (e) => {
    this.setState({
      todos: this.state.todos.filter((todo) => (!todo.completed))
    })
  }

  render() {
    return (
      <>
        <h1>Todo List MVP:</h1>
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodo} clearList={this.clearTodos}/>
      </>
    );
  }
}

export default App;
