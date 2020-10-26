import React from 'react'

const Todo = props => {

    const handleClick = () => {
        props.handleToggleTodo(props.todo.id)
    }

    return(
        <div onClick={handleClick}>
            <h4 style={{textDecoration: props.todo.completed ? 'line-through' : null }}>{props.todo.task}</h4>
        </div>
    )
}

export default Todo