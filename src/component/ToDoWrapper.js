import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos(prevTodos => [...prevTodos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]); // This will log the updated todos whenever it changes

    return (
        <div className='ToDoWrapper'>
            <ToDoForm addTodo={addTodo}/>
        </div>
    );
}

export default ToDoWrapper;
