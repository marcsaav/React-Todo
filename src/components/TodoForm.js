import React from 'react'

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.task)
        this.setState({
            task: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input
                value={this.state.task}
                type='text'
                name='todo'
                placeholder='...todo'
                onChange={this.handleChange}
                >
                </input>
                <button type='submit'>Add To-Do</button>
                <button onClick={this.props.clearList}>Clear Completed</button>
            </form>
    )}
}

export default TodoForm