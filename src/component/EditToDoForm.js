import React, { useState } from 'react'

const EditToDoForm = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault() // prevent the page from refreshing

        editTodo(value,task.id)
        setValue('') // clear the input after submitting

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input' placeholder='Update Task' value={value}
        onChange={(e)=>setValue(e.target.value)} />
        <button className='todo-btn' type='submit'>Update Task</button>
    </form>
  )
}

export default EditToDoForm
