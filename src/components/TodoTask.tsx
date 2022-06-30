//style
import "./TodoTask.css"

import React from 'react'
import { ITask } from '../Interfaces';

interface Props {
    tasks: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ tasks, completeTask }: Props) => {
    return (
        <div className="general_todo_container">
            <div className="task_card">
                <p>{tasks.taskName}</p>
                <p>Days: {tasks.days}</p>
                <button onClick={() => { completeTask(tasks.taskName) }}>X</button>
            </div>
        </div>
    )
}

export default TodoTask;