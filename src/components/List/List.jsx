import React, { useState } from 'react';
import './List.css';
import Todo from '../Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/todoSlice';

const List = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const dispatch = useDispatch();

    const listOfTodo = useSelector((state) => state.todo)

    const handleCreateTask = (e) => {
        e.preventDefault();
        dispatch(addTask({ name: taskName, description: taskDescription }));
        setTaskName('');
        setTaskDescription('');
    };
    


    return (
        <div className='main'>
            <div className='todo__list'>
                <h2>Todo List</h2>
                {listOfTodo && listOfTodo.map(({id, name, description}) => (
                    <Todo key={id} id={id} name={name} description={description} />
                ))}
            </div>
            <div className='btn__block'>
                <h2>Add new todo</h2>
                <input type='text'
                placeholder='Enter todo name'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />
                <input type='text'
                placeholder='Enter todo description'
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button onClick={handleCreateTask}>Create todo</button>
            </div>
            
        </div>
    );
};

export default List;