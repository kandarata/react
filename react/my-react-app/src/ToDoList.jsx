import React, { useState } from 'react';

function ToDoList(props) {

    const [tasks, setTasks] = useState();
    const [newTask, setNewsTask] = useState();

    function handleInputChange(event) {
        setNewsTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewsTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {

        }
    }

    function moveTaskDown(index) {

    }

    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                            Delete 
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                                👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                                👇
                        </button>
                    </li>
                )}
            </ol>
            
        </div>
    );
}

export default ToDoList;