import React, {useState} from 'react'
import '../index.css'
function ToDoList () { 

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTasks] = useState('')

    function handleInputChange(event) {
        setNewTasks(event.target.value)
    }
    
    
    function addTodo() {
        if (newTask.trim() !== ''){
            setTasks(t => [...t, newTask])
            setNewTasks('');
        }
    }  
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default behavior (e.g., form submission)
          addTodo();
        }
    };

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index)
        setTasks(updateTasks)
    }

    function moveUpTask(index) {
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] =
            [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    function moveDownTask(index) {
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] =
            [updateTasks[index+1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }


    return(
    <div className='mx-10 my-12 place-content-center flex'>
        <div className='flex flex-col place-content-center'>

            <div className='text-3xl font-bold text-center flex flex-row place-content-center my-6'>
                <div className=' mx-3 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" className=''/>
                    </svg>
                </div>
                <div>
                    Todo List
                </div>
            </div>

            <div className='flex place-content-center'>
                <input 
                    className='border-[2px] border-black align-middle m-3 text-sm w-[400px] h-10 p-2 rounded'
                    type='text'
                    placeholder='Enter New Task...'
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                 />
                <button
                    className='add-button bg-slate-900 align-middle px-3 py-1 text-white  rounded m-3'
                    onClick={addTodo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                </button>
            </div>

            <ol className=' flex flex-col m-3 my-5'>
                {tasks.map((task, index) => 
                <li className='flex border-solid border-[1.5px] border-[#b0afaf] rounded justify-between w-[500px] m-1' key={index} >

                    <span className='font-medium text-sm p-2' >{task}</span>

                    <div className='flex cursor-pointer'>

                        <div className='flex delete-button p-1 items-center' onClick={() => deleteTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </div>

                        <div className='flex move-button p-1 items-center'  onClick={() => moveUpTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>

                        <div className='flex move-button p-1 items-center'  onClick={() => moveDownTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                    </div>

                </li>)}
            </ol>
                </div>
    </div>
);
}

export default ToDoList