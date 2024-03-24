import React, { useState } from 'react'

const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault() // prevent the page from refreshing

        addTodo(value)
        setValue('') // clear the input after submitting

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input' placeholder='Add a new task' value={value}
        onChange={(e)=>setValue(e.target.value)} />
        <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default ToDoForm
