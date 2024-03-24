import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos(prevTodos => [...prevTodos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]); // This will log the updated todos whenever it changes

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editToDo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (value, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task: value, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>ToDo-List</h1>
            <ToDoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo}/>
                ):(
                    <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo ={deleteTodo}
                editToDo={editToDo}/>
                )
                
            ))}
        </div>
    );
}

export default ToDoWrapper;
