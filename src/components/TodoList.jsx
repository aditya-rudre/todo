import React, { useState, useEffect } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        setTasks(savedTasks ? JSON.parse(savedTasks) : []);
    }, []);

    // Save tasks to localStorage whenever tasks array changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleTitleChange = (event) => {
        setNewTaskTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewTaskDescription(event.target.value);
    };

    const addTodo = () => {
        if (newTaskTitle.trim() !== '' && newTaskDescription.trim() !== '') {
            const newTask = {
                title: newTaskTitle,
                description: newTaskDescription
            };
            setTasks((prevTasks) => [newTask, ...prevTasks]);
            setNewTaskTitle('');
            setNewTaskDescription('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveUpTask = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const moveDownTask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const renderDescription = (description) => {
        const parts = description.split('#');
        return parts.map((part, index) => {
            if (index < parts.length - 1) {
                return (
                    <React.Fragment key={index}>
                        {part}
                        <input
                            type="checkbox"
                            checked={false} // You can manage the checked state as needed
                            onChange={() => handleCheckboxClick(index)}
                        />
                    </React.Fragment>
                );
            } else {
                return part; // Render the last part (after the last '#')
            }
        });
    };

    const handleCheckboxClick = (index) => {
        // Handle checkbox click logic
        // For example, toggle checkbox state or perform any other action
    };


    return (
        <div className='mx-4 md:mx-10 my-12 justify-center flex '>
            <div className='w-full max-w-[700px]'>
                <div className='text-3xl font-bold flex justify-center my-6'>
                    <div className='mx-3 flex align-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </div>
                    <div>Todo List</div>
                </div>

                <div className='flex flex-wrap'>
                    <input
                        className='flex-grow border-[2px] border-black m-2 text-sm p-2 rounded bg-white bg-opacity-75 font-semibold'
                        type='text'
                        placeholder='Enter Title...'
                        value={newTaskTitle}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        className='flex-grow border-[2px] border-black m-2 text-sm p-2 content-center  rounded resize-none bg-white bg-opacity-75'
                        placeholder='Enter Description...'
                        value={newTaskDescription}
                        onChange={handleDescriptionChange}
                    />
                    <button
                        className='add-button bg-slate-900 px-4 py-1 text-white rounded m-2 transition-transform duration-150 transform  hover:scale-90 '
                        onClick={addTodo}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300 transform  hover:scale-125">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <ol className='flex flex-col m-3 my-5 '>
                    {tasks.map((task, index) => (
                        <li className='flex border-solid border-[1.5px] border-[#b0afaf] rounded justify-between items-start m-1 p-2 transition-all duration-150 hover:scale-[1.2] bg-white bg-opacity-90' key={index}>
                            <div>
                                <h3 className='font-semibold text-xl px-2 py-1'>{task.title}</h3>
                                {/* <div className='font-[Inter] text-xs px-3 my-1'>
                                    <div style={{ whiteSpace: 'pre-wrap' }}>{task.description}</div>
                                </div> */}
                                <div className='font-[Inter] text-xs px-3 my-1'>
                                    <div style={{ whiteSpace: 'pre-wrap' }}>
                                        {renderDescription(task.description)}
                                    </div>                        
                                </div>
                            </div>
                            <div className='flex cursor-pointer flex-col items-center justify-between'>
                                <div>
                                    <button className='delete-button p-1 mx-2' onClick={() => deleteTask(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline-block align-middle transition-transform duration-300 transform hover:rotate-90 hover:text-red-600 hover:scale-150">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className='flex flex-col justify-between mt-1'> 
                                    <div className='move-button' onClick={() => moveUpTask(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 transform hover:-translate-y-2 hover:text-blue-500 hover:scale-[2]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </div>
                                    <div className='move-button' onClick={() => moveDownTask(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 transform hover:translate-y-2 hover:text-blue-500 hover:scale-[2]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            

                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
