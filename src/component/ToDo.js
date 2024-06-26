import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({task,toggleComplete,deleteTodo,editToDo}) => {

  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={()=>editToDo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} className='fa-trash ' onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default ToDo
