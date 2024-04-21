import React from 'react'

const Card = () => {
  return (
    <ol className='flex flex-col m-3 my-5'>
        {tasks.map((task, index) => (
            <li className='flex border-solid border-[1.5px] border-[#b0afaf] rounded justify-between items-start m-1 p-2' key={index}>
                <div>
                    <h3 className='font-semibold text-xl px-2 py-1'>{task.title}</h3>
                    <div className='font-[Inter] text-xs px-3 my-1 flex flex-wrap'>{task.description}</div>
                </div>
                <div className='flex cursor-pointer flex-row items-center'>
                    <button className='delete-button p-1 mx-2' onClick={() => deleteTask(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block align-middle">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                    <div className='flex flex-col'>
                        <button className='move-button p-1 ' onClick={() => moveUpTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <button className='move-button p-1 ' onClick={() => moveDownTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    
                    
                </div>
            </li>
        ))}
    </ol>
  )
}

export default Card