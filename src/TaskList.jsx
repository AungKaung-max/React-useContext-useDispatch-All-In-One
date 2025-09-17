import React, { useState } from 'react'

function TaskList({ todos, onToggle, onDelete, onSave }) {
    return (
        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Task todo={todo} onToggle={onToggle} onDelete={onDelete} onSave={onSave}></Task>
                    </li>
                ))}
            </ul>
        </>
    )
}

function Task({todo,onToggle, onDelete, onSave}) {
    const [editing,setEditing] = useState(false);
    let content;

    if(editing) {
        content = (
            <>
                <input type="text" value={todo.title} onChange={(e) => onSave({...todo, title : e.target.value})}/>
                <button onClick={() => setEditing(false)}>Save</button>
            </>
        )
    }

    else {
        content = (
            <>
                {todo.done ? <del>{todo.title}</del> : todo.title}
                <button onClick={() => setEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <>
            <input type="checkbox" checked={todo.done} onChange={(e) => {
                onToggle(
                    todo.id,
                    e.target.checked
                )
            }} />
            {/* {todo.done ? <del>{todo.title}</del> : todo.title} */}
            {content}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
    )
}

export default TaskList