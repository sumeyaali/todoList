import React from "react";
import { Checkbox} from "./layout/Checkbox"; 
import { useTasks} from "../hooks/index";

export const Tasks = () => {
    const { tasks } = useTasks('1')

    console.log('Its me!',tasks);

    let projectName = '';

    return (
        <div className='tasks' data-testid='tasks'>
            <h2 data-testid='project-name'>{projectName}</h2>

            <ul className='tasks__list'>
                {tasks.map(task =>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>

                ))}

            </ul>

        </div>
    )
}