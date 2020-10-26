import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
            {props.todos.map((todo) => (
                <Todo handleToggleTodo={props.handleToggleTodo} key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList
