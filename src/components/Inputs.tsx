// style
import "./Inputs.css";

import React, { useState } from 'react';
import { ITask } from "../Interfaces";
import TodoTask from './TodoTask';

const Inputs: React.FC = () => {
    const [tasks, setTasks] = useState<string>("");
    const [days, setDays] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTasks(e.target.value)
    }

    const handleChangeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDays(Number(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask = { taskName: tasks, days: days };
        setTodo([...todo, newTask]);
        console.log(todo);
        setTasks("");
        setDays(0);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodo(todo.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    }


    return (
        <div className="form_container
        ">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Task:</span>
                    <input
                        type="text"
                        placeholder="Your task..."
                        required
                        onChange={handleChangeTask}
                        value={tasks} />
                </label>
                <label>
                    <span>Deadline:</span>
                    <input
                        type="number"
                        required
                        onChange={handleChangeDays}
                        value={days} />
                </label>
                <button>Submit</button>
            </form>
            <div>
                {todo.map((tasks: ITask, key: number) => {
                    return <TodoTask key={key} tasks={tasks} completeTask={completeTask} />;
                })}
            </div>
        </div>
    )
}

export default Inputs;