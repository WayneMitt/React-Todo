import React from 'react'

function Todo(props) {
    const clickHandler = () => {
        props.toggleTodo(props.todoItem.id);
    }
    return (
        <div 
            className={`item${props.todoItem.completed ? ' completed' : ''}`}
            onClick={clickHandler}
        >
            <p>{props.todoItem.task}</p>
        </div>
    )
}

export default Todo;