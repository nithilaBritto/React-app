import React from 'react'

import { FaTrash,FaPenSquare } from "react-icons/fa";
function TodoItem(props) {
  const {completed,id,task}=props.item
  const {onComplete,onEdit,onDelete}=props
  return (
    <>
        <input type="checkbox" 
            onClick={(e)=>onComplete(id)}
        />
        <span className={completed?'completed':''}>{task} </span>
        <div>
          <button className="edit" onClick={(e)=>onEdit(id)}><FaPenSquare /> </button>
          <button onClick={()=>onDelete(id)}><FaTrash /> </button>
        </div>   
    </>
  )
}

export default TodoItem