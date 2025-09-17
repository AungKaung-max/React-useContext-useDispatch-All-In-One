import { createContext, useContext } from "react";
import { useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

import React from 'react'

function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksContext value={tasks}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext>
    )
}

export function useTasks(){
    return useContext(TasksContext)
}

export function useTasksDispatch(){
    return useContext(TasksDispatchContext)
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
]
let nextId = 3;

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, { id: action.id, text: action.text, done: false }]
        }
        case 'saved': {
            return tasks.map(t => {
                if (t.id === action.id) {
                    return { ...t, text: action.text }
                }
                else {
                    return t
                }
            })
        }
        case 'toggled': {
            return tasks.map(t => {
                if (t.id === action.id) {
                    return { ...t, done: action.check }
                }
                else {
                    return t
                }
            })
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id)
        }
        default: {
            throw Error("unknow action" + action.type)
        }
    }

}

export default TasksProvider