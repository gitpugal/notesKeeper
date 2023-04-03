import React from 'react';

const Note = (props) => {
    function deleteHandler(){
        props.deleteNote(props.index);
    }
  return (
    <div className="bg-white p-10 rounded-lg w-fit my-5 relative" id={props.index}>
      <p className="absolute text-xs top-1 right-2">{props.date}</p>
        <p>{props.note}</p>
        <button onClick={deleteHandler} className="bg-black text-white p-2 rounded-lg">
            remove
        </button>
    </div>
  )
}

export default Note