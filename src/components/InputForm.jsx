import React, {useState} from 'react';

const InputForm = (props) => {
    const [task, setTask] = useState("");
    function changeHandler(){
        setTask(document.getElementById('task').value);
    }

    function submitHandler(event){
        event.preventDefault();
        props.onAdd(task);
        setTask("");
    }

  return (
    <form className=' flex flex-col w-[100%] items-center mt-[60px] justify-center'>
     <label htmlFor="" className='text-white mb-4  font-extrabold'>Add your task</label>
            <div className="w-full">
            <textarea name="" id="task" placeholder="Add a task" value={task} onChange={changeHandler} className="w-full relative rounded-lg placeholder: text-center focus:outline-none  text-white bg-white bg-opacity-10 " rows="4"></textarea>
            <button onClick={submitHandler} className="bg-white rounded-full text-2xl text-center h-10 w-10 mt-3 bg-opacity-90 ">
                <p className="">
                    +
                </p>
            </button>
            </div>
    </form>
  )
}

export default InputForm;